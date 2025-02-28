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
import { Badge } from "./Badge";

export interface TableArgs {
  title?: string;
  headers: string[];
  rows: {
    id: number;
    name: string;
    price: string;
    rating: number;
    category: string;
    image?: { url: string; width: number; height: number };
    onClick?: () => void;
  }[];
  footer?: ReactElement;
  rowClassname?: string;
}

export const Table = forwardRef(
  ({ title, headers, rows, footer, rowClassname }: TableArgs, ref) => (
    <BaseTable
      ref={ref as LegacyRef<HTMLTableElement> | undefined}
      style={{ height: "100%" }}
    >
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
          <TableRow
            key={row.id}
            className={rowClassname}
            onClick={row.onClick}
            style={{ cursor: row.onClick ? "pointer" : "" }}
          >
            {row.image && (
              <TableCell>
                <Image
                  src={row.image.url}
                  width={row.image.width}
                  height={row.image.height}
                  style={{ height: row.image.height, width: row.image.width }}
                  sizes="100vw"
                  alt=""
                />
              </TableCell>
            )}
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.name}
              <br />
              {row.rating > 4.5 && <Badge variant="default">Destaque</Badge>}
            </TableCell>
            <TableCell className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {Number(row.price).toLocaleString("pt-BR", {
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
