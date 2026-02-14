import React, { useState } from "react";
import "./Table.scss";
import { tableData } from "../../../data/table-data.js";     

export function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
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
            {tableData.map((row, index) => (
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
        <button onClick={onClose} className="modal__btn">
          close
        </button>
      </div>
    </div>
  );
}

export function Openbtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className="modal__btn modal__btn--open"
        onClick={() => setIsModalOpen(true)}
      >
        Open modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}


// import { Openbtn } from "./pages/CabinetPage/Table/Table.jsx";