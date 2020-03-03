import React, { useRef, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import useOutsideClick from '../../useOutsideClick';
import Modal from '../ModalWithValute/Modal';
import { getItem } from '../utils';
import { newGetData } from '../../../store/selectors';
import ValuteInputsItem from './ValuteInputsItem';

function Index({ onChange, newGetData }) {
  const ref = useRef();
  const [modalWindow, setModalWindow] = useState(false);
  const [flag, setflag] = useState(null);

  const [valut, setValute] = useState('HUF');
  const list = Object.values({ ...newGetData.Valute });
  const valute = ['RUR', 'USD', 'EUR', 'HUF'];

  useOutsideClick(ref, () => modalWindow && setModalWindow(false));

  const getVal = el => {
    setModalWindow(false);
    return setValute(el.CharCode);
  };

  const handleChange = ({ currentTarget }) => {
    setflag(currentTarget.textContent);
    return ['RUR', 'USD', 'EUR'].includes(currentTarget.textContent)
      ? setValute('HUF')
      : valut;
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
        {valute.map(item => {
          return (
            <ValuteInputsItem
              item={item}
              handleChange={handleChange}
              valut={valut}
              flag={flag}
            />
          );
        })}
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
