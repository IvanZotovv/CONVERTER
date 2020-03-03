import React, { useRef, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import useOutsideClick from '../useOutsideClick';
import Modal from './ModalWithValute/Modal';
import { getItem } from './utils';
import { newGetData } from '../../store/selectors';

function Index({ onChange, newGetData }) {
  const ref = useRef();
  const [modalWindow, setModalWindow] = useState(false);
  const [valut, setValute] = useState('HUF');
  const list = Object.values({ ...newGetData.Valute });

  useOutsideClick(ref, () => modalWindow && setModalWindow(false));

  const handleChange = ({ target }) =>
    ['RUR', 'USD', 'EUR'].includes(target.textContent)
      ? setValute('HUF')
      : valut;

  const getVal = el => {
    setModalWindow(false);
    return setValute(el.CharCode);
  };

  const insertModalWithValute = modalWindow ? (
    <Modal onChange={onChange} getVal={getVal} />
  ) : null;

  return (
    <div ref={ref} className="converter-from">
      <ul
        className="converter-from-valute-list"
        onClick={event => onChange(getItem(event.target.textContent, list))}
      >
        <li className="converter-from-valute-item" onClick={handleChange}>
          RUR
        </li>
        <li className="converter-from-valute-item" onClick={handleChange}>
          USD
        </li>
        <li className="converter-from-valute-item" onClick={handleChange}>
          EUR
        </li>
        <li className="converter-from-valute-item" onClick={handleChange}>
          {valut}
        </li>
        <li
          className="converter-from-valute-item"
          onClick={() => setModalWindow(true)}
        >
          ▼
        </li>
        {insertModalWithValute}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  newGetData
});

export default connect(mapStateToProps)(Index);
