import React, { useRef, useState, useContext } from 'react';

import useOutsideClick from '../useOutsideClick';
import Modal from './ModalWithValute/Modal';
import { getItem } from './utils';
import { Context } from '../../store/context';

export default function Index({ onChange, handleChange }) {
  const ref = useRef();
  const [modalWindow, setModalWindow] = useState(false);
  const { list } = useContext(Context);

  useOutsideClick(ref, () => {
    if (modalWindow) setModalWindow(false);
  });

  const insertModalWithValute = modalWindow ? (
    <Modal onChange={onChange} />
  ) : null;

  return (
    <div ref={ref} className="converter-from">
      <ul
        className="converter-from-valute-list"
        onClick={event =>
          onChange(getItem(event.target.textContent, list), handleChange)
        }
      >
        <li className="converter-from-valute-item">RUR</li>
        <li className="converter-from-valute-item">USD</li>
        <li className="converter-from-valute-item">EUR</li>
        <li className="converter-from-valute-item">HUF</li>
        <li
          className="converter-from-valute-item"
          onClick={() => setModalWindow(!modalWindow)}
        >
          ▼
        </li>
        {insertModalWithValute}
      </ul>
    </div>
  );
}
