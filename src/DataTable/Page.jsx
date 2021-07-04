import React, { useCallback } from 'react';
import clsx from 'clsx';

const Page = (props) => {
  const { pageNumber, currentPageNumber, onChange } = props;

  const click = useCallback(() => {
    onChange(pageNumber);
  }, [onChange, pageNumber]);

  const highlight = currentPageNumber === pageNumber;

  return (
    <li className="page-item mr-1">
      <button
        type="button"
        className={clsx('page-link', { 'button-outline': highlight })}
        onClick={click}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

export default Page;
