import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.scss";

const renderPagination = props => {
  let items = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.hitsPerPage); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={props.currentPage === i}
        onClick={() => props.paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return <Pagination className="Pagination">{items}</Pagination>;
};

export default renderPagination;