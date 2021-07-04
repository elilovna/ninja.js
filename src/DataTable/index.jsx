import React, { useState, useCallback } from 'react';
import Pagination from './Pagination';
import Table from './Table';
import Search from './Search';

const DataTable = ({ rows: initialRows, rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(initialRows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const totalNumberOfPages =
    rowsPerPage === 0 ? 0 : Math.ceil(rows.length / rowsPerPage);

  const searchHandler = useCallback(
    ({ target: { value: text } }) => {
      setRows(() => {
        if (!text) {
          return initialRows;
        }

        return initialRows?.filter((row) => {
          return (
            row.name.toLowerCase().search(text.toLowerCase()) > -1 ||
            row.email.toLowerCase().search(text.toLowerCase()) > -1
          );
        });
      });
    },
    [setRows, initialRows]
  );

  return (
    <>
      <Search onSearch={searchHandler} />
      <Table
        rowsPerPage={rowsPerPage}
        currentPageNumber={currentPageNumber}
        rows={rows}
      />
      {totalNumberOfPages > 0 && (
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={setCurrentPageNumber}
        />
      )}
    </>
  );
};

export default DataTable;
