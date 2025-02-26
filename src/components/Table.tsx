import { forwardRef, LegacyRef, ReactElement } from "react";

import {
  BaseTable,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";

export interface TableArgs {
  title?: string;
  headers: string[];
  rows: {
    id: number;
    name: string;
    price: number;
    rating: number;
    category: string;
    image?: { url: string; width: number; height: number };
  }[];
  footer?: ReactElement;
}

export const Table = forwardRef(
  ({ title, headers, rows, footer }: TableArgs, ref) => (
    <BaseTable ref={ref as LegacyRef<HTMLTableElement> | undefined}>
      {title && <TableCaption>{title}</TableCaption>}
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead key={i}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {row.image && (
              <TableCell>
                <Image
                  src={row.image.url}
                  width={row.image.width}
                  height={row.image.height}
                  alt=""
                />
              </TableCell>
            )}
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.name}
            </TableCell>
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </TableCell>
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.rating}
            </TableCell>
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.category}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </BaseTable>
  )
);

Table.displayName = "Table";
