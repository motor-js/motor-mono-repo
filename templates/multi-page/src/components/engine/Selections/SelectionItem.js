import React from "react";

const SelectionItem = ({ selections, clear }) => {
  const { qField, qSelected, qSelectedCount } = selections;

  return (
    <li>
      <div className="gx-media-body">
        <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
          <h5 className="gx-text-capitalize gx-user-name gx-mb-0">
            <span className="gx-link">{qField}</span>
          </h5>
        </div>
        <p className="gx-fs-sm">{qSelected}</p>
        <span
          onClick={() => clear(qField)}
          className="gx-btn gx-btn-sm gx-top2 gx-text-muted"
        >
          <i className="icon icon-trash gx-pr-2" />
          Clear
        </span>
      </div>
    </li>
  );
};

export default SelectionItem;
