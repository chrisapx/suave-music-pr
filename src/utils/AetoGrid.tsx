import React, { useState } from "react";

interface Column {
  key: string;
  label: string;
  width?: string;
  render?: (value: any, row: any) => JSX.Element | string;
}

interface AetoGridProps {
  data: any[];
  columns: Column[];
  isLoading?: boolean;
  loaderIcon?: any;
  footerContent?: any;
  onRowSelect?: (selectedRows: any[]) => void;
}

const AetoGrid: React.FC<AetoGridProps> = ({
  data,
  columns,
  loaderIcon,
  isLoading = false,
  footerContent,
  onRowSelect = () => {},
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="max-h-[60vh] overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="sticky top-0 bg-gray-50 text-sm font-bold">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width || "auto" }}
                  className="px-4 py-2 text-left font-medium text-gray-600 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-sm">
            {!isLoading && data && data.length > 0 ? (
              data.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onMouseEnter={() => setHovered(row.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => onRowSelect ? onRowSelect([row]) : null}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{ width: col.width || "auto" }}
                      className="px-4 py-2 text-gray-700 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      {col.render ? col.render(row[col.key], row) : row[col.key] || "--"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-5 text-center text-gray-500">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>

          <tfoot className="bg-white border-t sticky bottom-0">
            <tr>
              <td colSpan={columns.length} className="p-4 text-center">
                {isLoading && (
                  <div className="flex items-center justify-center py-6 w-full">
                    {loaderIcon}
                  </div>
                )}
                <div>{footerContent}</div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AetoGrid;
