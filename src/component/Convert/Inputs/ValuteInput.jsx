import React, { useRef, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import useOutsideClick from '../../useOutsideClick';
import Modal from '../ModalWithValute/Modal';
import { getItem } from '../utils';
import { newGetData } from '../../../store/selectors';
import ValuteInputsItem from './ValuteInputsItem';
import { valute, getValueFromItem } from './../utils';

function Index({ onChange, newGetData }) {
  const ref = useRef();
  const [modalWindow, setModalWindow] = useState(false);
  const [flag, setflag] = useState(null);
  const [valut, setValute] = useState('HUF');
  const list = Object.values({ ...newGetData.Valute });

  useOutsideClick(ref, () => modalWindow && setModalWindow(false));

  const getVal = el => {
    setModalWindow(false);
    setflag(el.CharCode);
    return setValute(el.CharCode);
  };

  const isOpenBlock = val => {
    setflag(val);
    return ['RUR', 'USD', 'EUR'].includes(val) ? setValute('HUF') : valut;
  };

  const insertModalWithValute = modalWindow ? (
    <Modal onChange={onChange} getVal={getVal} />
  ) : null;

  return (
    <div ref={ref} className="converter-from">
      <ul className="converter-from-valute-list">
        {valute.map(item => {
          const getObjectfromList = getItem(
            getValueFromItem(item, valut),
            list
          );
          return (
            <ValuteInputsItem
              onChange={onChange}
              item={getValueFromItem(item, valut)}
              flag={flag}
              isOpenBlock={isOpenBlock}
              list={list}
              obj={getObjectfromList}
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
