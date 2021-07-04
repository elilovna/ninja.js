import React, { useMemo } from 'react';
import Page from './Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = useMemo(
    () =>
      Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => {
        return (
          <Page
            key={pageNumber}
            currentPageNumber={currentPageNumber}
            pageNumber={pageNumber}
            onChange={onChange}
          />
        );
      }),
    [totalNumberOfPages, currentPageNumber, onChange]
  );

  return <ul className="pagination">{pages}</ul>;
};

export default Pagination;
