import React, { useContext, useState, useMemo } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import ValuteInput from './ValuteInput';
import { Context } from '../../store/context';
import {
  charCodeValue,
  selectVal,
  getExchengeDevide,
  getExchengeMultiply,
  chooseObj
} from './utils';

export default function Index() {
  const dispatch = useDispatch();
  const { left, right } = useContext(Context);
  const [inputVal, setInputVal] = useState({
    leftInput: '',
    rightInput: ''
  });

  const { leftInput, rightInput } = inputVal;

  // const memoizedValue = useMemo(() => onChange(left, right), [left, right]);
  // console.log(memoizedValue);

  const getValueFromInput = side => event =>
    setInputVal(chooseObj(side, event, left, right));

  const onChange = side => value => {
    return selectVal(side, value, dispatch);
  };

  return (
    <div className="converter">
      <h2>Конвертация валют</h2>
      <div className="converter-block">
        <div className="converter-block-head">
          <ValuteInput onChange={onChange('left')} />
          <ValuteInput onChange={onChange('right')} />
        </div>
        <div className="converter-block-input">
          <Input
            placeholder="Basic usage L"
            type="number"
            value={leftInput}
            onChange={getValueFromInput('left')}
          />
          <Input
            placeholder="Basic usage R"
            type="number"
            value={rightInput}
            onChange={getValueFromInput('right')}
          />
        </div>
      </div>
      {inputVal ? (
        <div className="converter-info">
          <div className="converter-info-left">
            <p className="converter-info-left-from">
              1 {left !== undefined ? charCodeValue(left) : 'RUR'}
              =&nbsp;
            </p>
            <p className="converter-info-left-to">
              {getExchengeDevide(left, right)}
              &nbsp;
              {right !== undefined ? charCodeValue(right) : 'RUR'}
            </p>
          </div>
          <div className="converter-info-right">
            <p className="converter-info-right-from">
              1&nbsp;
              {right !== undefined ? charCodeValue(right) : 'RUR'}
              =&nbsp;
            </p>
            <p className="converter-info-right-to">
              {getExchengeMultiply(left, right)}
              &nbsp;
              {left !== undefined ? charCodeValue(left) : 'RUR'}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
