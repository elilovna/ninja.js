import React, { useMemo } from 'react';
import Row from './Row';

const Table = ({rowsPerPage, currentPageNumber, rows}) => {
  const rowsToRender = useMemo(() => {
    const rowsInPageNumber = (pageNumber) => {
      const startIndex = pageNumber * rowsPerPage;
      return [startIndex, startIndex + rowsPerPage];
    };
    return rows.slice(...rowsInPageNumber(currentPageNumber)).map((row) => {
      return <Row key={row.per_id} row={row} />;
    });
  }, [rowsPerPage, currentPageNumber, rows]);

  return (
    <table>
      <tbody>{rowsToRender}</tbody>
    </table>
  );
};

export default Table;
