import React from "react";
import "./Table.scss";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../../redux/table/actions.js";

export function TableSection() {
  const dispatch = useDispatch();

 
  const isOpen = useSelector((state) => state.table.isModalOpen);
  const rows = useSelector((state) => state.table.rows) || [];

  return (
    <div>
     
      {/* <button
        className="modal__btn modal__btn--open"
        onClick={() => dispatch(openModal())}
      >
        Open modal
      </button> */}

  
      {isOpen && (
        <div
          className="modal__overlay"
          onClick={() => dispatch(closeModal())}
        >
          <div
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Table</h2>

            <table className="modal__table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Number</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.phone}</td>
                    <td>{row.address}</td>
                    <td>{row.company}</td>
                    <td>{row.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="modal__btn"
              onClick={() => dispatch(closeModal())}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
