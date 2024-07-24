"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ProductsProps } from "@/types";
import Image from "next/image";

export const ProducColumns: ColumnDef<ProductsProps>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className=''>{row.index + 1}</p>,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.image1}
        alt=' '
        width={40}
        height={40}
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <p className=''>{row.original.name}</p>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <p className=''>{row.original.categoryName}</p>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <p className=''>{row.original.description}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='h-8 w-8 p-0'
            >
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className=' bg-red-400 text-center'>
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View product full details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
