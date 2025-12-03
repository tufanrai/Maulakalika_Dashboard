"use client";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

type Admins = {
  name: string;
  email: string;
  contact: string;
  role: string;
  actions?: any;
};

const defaultAdmins: Admins[] = [
  {
    name: "Tufan Rai",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
  {
    name: "Khushi Sharma",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
  {
    name: "Akriti Ojha",
    email: "info@example.com",
    contact: "9817362424",
    role: "Super Admin",
  },
  {
    name: "Aryana Sharma",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
];

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Admins>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("contact", {
    header: () => <span>Contact</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    header: "Role",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("actions", {
    header: "Action",
    cell: () => (
      <div className="w-full flex items-center justify-center gap-2">
        <button className="font-regural text-sm px-5 py-2 rounded-md bg-red-600 text-white cursor-pointer">
          Remove admin
        </button>
        <button className="font-regural text-sm px-5 py-2 rounded-md bg-blue-600 text-white cursor-pointer">
          Update admin
        </button>
      </div>
    ),
  }),
];

const Admins_list_card = () => {
  const [data, _setData] = React.useState(() => [...defaultAdmins]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full p-2">
      <table className="w-full border-1 border-primary p-2">
        <thead className="bg-primary text-white font-semibold">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="text-start px-3 py-1" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="border-b-1 border-primary/10 font-regural text-sm text-start"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="py-2 border-r-1 border-primary/10 px-3"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admins_list_card;
