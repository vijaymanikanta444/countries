import React, { useState, useEffect, useReducer } from "react";
import "./Table.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const TableComponent = ({ countriesData = [] }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    // columnHelper.accessor("firstName", {
    //   cell: (info) => info.getValue(),
    // }),
    // columnHelper.accessor((row) => row.lastName, {
    //   id: "lastName",
    //   cell: (info) => <i>{info.getValue()}</i>,
    //   //   header: () => <span>Last Name</span>,
    //   //   footer: (info) => info.column.id,
    // }),
    // columnHelper.accessor("age", {
    //   header: () => "Age",
    //   //   cell: (info) => info.renderValue(),
    //   //   footer: (info) => info.column.id,
    // }),
    // columnHelper.accessor("visits", {
    //   header: () => <span>Visits</span>,
    //   //   footer: (info) => info.column.id,
    // }),
    // columnHelper.accessor("status", {
    //   header: "Status",
    //   //   footer: (info) => info.column.id,
    // }),
    // columnHelper.accessor("progress", {
    //   header: "Profile Progress",
    //   //   footer: (info) => info.column.id,
    // }),

    columnHelper.accessor("name", { header: () => <span>Country Name</span> }),
    columnHelper.accessor("code", { header: <span>Code</span> }),
    columnHelper.accessor("capital", { header: <span>Capital</span> }),
    columnHelper.accessor("phCode", { header: <span>Ph Code</span> }),
    columnHelper.accessor("population", { header: <span>Population</span> }),
    columnHelper.accessor("flag", {
      header: <span>Flag</span>,
      cell: (info) => {
        const cellValue = info.getValue();
        return cellValue ? (
          <img height="100px" width="100px" src={cellValue} alt="no-data" />
        ) : (
          ""
        );
      },
    }),
    columnHelper.accessor("emblem", {
      header: <span>Emblem</span>,
      cell: (info) => {
        const cellValue = info.getValue();
        return cellValue ? (
          <img height="100px" width="100px" src={cellValue} alt="no-data" />
        ) : (
          ""
        );
      },
    }),
  ];

  const [data, setData] = useState(() => [...countriesData]);

  useEffect(() => {
    if (countriesData.length > 0) {
      setData(countriesData);
    } else {
      setData([
        {
          code: "",
          capital: "",
          name: "",
          phCode: "",
          population: "",
          flag: "",
          emblem: "",
        },
      ]);
    }
  }, [countriesData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
