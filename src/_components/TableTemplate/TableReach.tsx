import { Paginate } from "../Paginate";
import { paginateData } from "../../_actions";

import "./table.css";
import { useState } from "react";

export type TableType = {
  tableData: Record<string, any>[]; // Or a more specific structure if possible
  tableHeader: Record<string, string>; // Keys are strings, values are also strings
};

export const TableReach = (props: TableType) => {
  const headerArr = Object.keys(props.tableHeader);

  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  return (
    <div>
      <table className={"reach_table"}>
        <thead>
          <tr>
            {headerArr.map((each, index) => (
              <th key={index}>{props.tableHeader[each]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginateData(props.tableData, pageNo, pageSize).map(
            // @ts-ignore: Suppress TypeScript error for dynamic key access
            (each, index: number) => (
              <tr key={index}>
                {headerArr.map((head: string, index: number) => (
                  <td key={index}>{each[head]}</td>
                ))}
              </tr>
            )
          )}
          {paginateData(props.tableData, pageNo, pageSize).length == 0 && (
            <tr>
              <td colSpan={headerArr.length} className={"no_record_found"}>
                NO RECORD FOUND
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {paginateData(props.tableData, pageNo, pageSize).length > 0 && (
        <Paginate
          datasource={props.tableData}
          pageNo={pageNo}
          pageSize={pageSize}
          changePageNo={setPageNo}
          changePageSize={setPageSize}
        />
      )}
    </div>
  );
};
