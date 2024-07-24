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
import { User } from "@/types";
export const columns: ColumnDef<User>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className=''>{row.index + 1}</p>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <p className=''>{row.original.name}</p>,
  },
  {
    accessorKey: "phoneNumber",
    header: "PhoneNumber",
    cell: ({ row }) => <p className=''>{row.original.phoneNumber}</p>,
  },
  {
    accessorKey: "roles",
    header: "Roles",
    cell: ({ row }) => (
      <p
        className={`${
          row.original.roles == "User" ? " text-green-500" : " text-blue-700"
        }`}
      >
        {row.original.roles}
      </p>
    ),
  },
  //
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

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
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View products details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
