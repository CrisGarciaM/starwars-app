import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationContainer = (props) => {
  function changePageOnClick(e) {
    props.onClick(e.target.getAttribute('value'));
  }

  return (
    <Pagination
      activePage={props.activePage}
      ellipsisItem={props.ellipsisItem}
      totalPages={props.totalPages}
      onClick={changePageOnClick}
    />
  );
};

export default PaginationContainer;
