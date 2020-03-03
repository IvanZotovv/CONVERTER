import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import './style.scss';
import { Input } from 'antd';
import { createStructuredSelector } from 'reselect';
import { left, right } from '../../../store/selectors';
import ValuteInput from './ValuteInput';
import {
  charCodeValue,
  selectVal,
  getExchengeDevide,
  getExchengeMultiply,
  chooseObj,
  leftVal,
  rightVal
} from '../utils';

function Index(props) {
  const dispatch = useDispatch();
  const { left, right } = props;
  const [inputVal, setInputVal] = useState({
    leftInput: '',
    rightInput: ''
  });

  const { leftInput, rightInput } = inputVal;

  useEffect(() => {
    setInputVal({
      leftInput: inputVal.leftInput,
      rightInput: inputVal.rightInput * leftVal(left)
    });
  }, [left]);

  useEffect(() => {
    setInputVal({
      leftInput: inputVal.leftInput,
      rightInput: inputVal.leftInput * leftVal(right)
    });
  }, [right]);

  const getValueFromInput = side => event =>
    setInputVal(chooseObj(side, event, left, right));

  const onChange = side => value => selectVal(side, value, dispatch);

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
              1 {left !== undefined ? charCodeValue(left) : 'RUR'} =&nbsp;
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
              {right !== undefined ? charCodeValue(right) : 'RUR'} =&nbsp;
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

const mapStateToProps = createStructuredSelector({
  left,
  right
});

export default connect(mapStateToProps)(React.memo(Index));
