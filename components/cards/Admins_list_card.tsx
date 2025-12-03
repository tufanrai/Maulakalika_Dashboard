"use client";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { getAllAdmins } from "@/app/api/auth.api";

// interface of the data declared
type Admins = {
  _id: string;
  name: string;
  email: string;
  contact: string;
  role: string;
  actions?: any;
};

// default values for the table
const defaultAdmins: Admins[] = [
  {
    _id: "1",
    name: "Tufan Rai",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
  {
    _id: "2",
    name: "Khushi Sharma",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
  {
    _id: "3",
    name: "Akriti Ojha",
    email: "info@example.com",
    contact: "9817362424",
    role: "Super Admin",
  },
  {
    _id: "4",
    name: "Aryana Sharma",
    email: "info@example.com",
    contact: "9817362424",
    role: "Admin",
  },
];

const Admins_list_card = () => {
  // fetch the data from
  const fetchedData = useQuery({
    queryKey: ["fetch the admin", "new user"],
    queryFn: getAllAdmins,
  });

  // Column helper
  const columnHelper = createColumnHelper<Admins>();

  // columns
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
        <div className="max-w-30 w-full flex flex-cols md:flex-row items-center justify-center gap-2">
          <button
            onClick={() => {}}
            className=" rounded-md bg-blue-600 text-white cursor-pointer flex items-center justify-center ease duration-300 hover:bg-blue-700 p-2 w-10 h-10"
          >
            <CiEdit className="font-black text-xl" />
          </button>
          <button
            onClick={() => {}}
            className=" rounded-md bg-red-600 text-white cursor-pointer flex items-center justify-center ease duration-300 hover:bg-red-700 p-2 w-10 h-10"
          >
            <CiTrash className="font-black text-xl" />
          </button>
        </div>
      ),
    }),
  ];

  // list the data into the table.
  const [data, _setData] = React.useState<Admins[]>(() => [...defaultAdmins]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // storing the value once successfully fetched
  React.useEffect(() => {
    if (fetchedData.isSuccess) {
      _setData(fetchedData.data?.data?.data);
    }
  }, [fetchedData.isSuccess]);

  return (
    <div className="w-full h-1/2 overflow-x-auto overflow-y-auto p-2">
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
              className="border-b-1 border-primary/10 font-regural text-sm text-start overflow-x-hidden overflow-y-auto"
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
