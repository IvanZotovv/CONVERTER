import React, { useState } from 'react';

export default function ValuteInputsItem({ item, handleChange, valut, flag }) {
  if ([item].includes('HUF')) {
    return (
      <li
        className="converter-from-valute-item"
        key={item}
        onClick={handleChange}
      >
        {flag === item ? (
          <div className="converter-from-valute-item-block-able"></div>
        ) : null}
        {valut}
      </li>
    );
  } else {
    return (
      <li
        className="converter-from-valute-item"
        key={item}
        onClick={handleChange}
      >
        {flag === item ? (
          <div className="converter-from-valute-item-block-able"></div>
        ) : null}
        {item}
      </li>
    );
  }
}
