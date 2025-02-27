"use client";

import { AxiosError } from "axios";
import { useState } from "react";

export type UseRequestOpts<T, K> = {
  initialValues?: T;
  params?: Partial<K>;
  onSuccess?: (data: T, input: K) => Promise<void> | void;
  onError?: (error: AxiosError) => Promise<void> | void;
  onFinally?: () => Promise<void> | void;
};

export const useRequest = <
  F extends (input: Parameters<F>[number]) => ReturnType<F>
>(
  handler: F,
  opts?: UseRequestOpts<Awaited<ReturnType<F>>, Parameters<F>[number]>
): [
  (
    params?: Parameters<F>[number],
    options?: Pick<
      UseRequestOpts<Awaited<ReturnType<F>>, Parameters<F>[number]>,
      "onSuccess" | "onError" | "onFinally"
    >
  ) => void,
  {
    data: Awaited<ReturnType<F>> | undefined;
    error: Error | undefined;
    status: number | undefined;
    loading: boolean;
    updateData: (data?: Awaited<ReturnType<F>>) => void;
  }
] => {
  const [data, setData] = useState<Awaited<ReturnType<F>> | undefined>(
    opts?.initialValues
  );
  const [error, setError] = useState<Error | undefined>();
  const [status, setStatus] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);

  const updateData = (data?: Awaited<ReturnType<F>>) => {
    setData(data);
  };

  const fetch = async (
    params: Parameters<F>[number],
    options?: Pick<
      UseRequestOpts<Awaited<ReturnType<F>>, Parameters<F>[number]>,
      "onSuccess" | "onError" | "onFinally"
    >
  ) => {
    try {
      setLoading(true);

      const response = await handler({ ...opts?.params, ...params });

      const value = response as {
        data: Awaited<ReturnType<F>>;
        status: number;
      };
      setData(value.data);
      setStatus(value.status);
      if (options?.onSuccess)
        return await options?.onSuccess(value.data, params);
      await opts?.onSuccess?.(value.data, params);
    } catch (err) {
      const error = err as AxiosError;

      setError(error);

      if (options?.onError) return await options?.onError(error);
      await opts?.onError?.(error);
    } finally {
      setLoading(false);

      options?.onFinally?.();
    }
  };

  return [fetch, { data, loading, updateData, error, status }];
};
