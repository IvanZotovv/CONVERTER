import React from 'react';
import { Input } from 'antd';

export default function HomeInput({ sendValueFromInput }) {
  const getValFromInput = ({ currentTarget }) =>
    sendValueFromInput(currentTarget.value);
  return <Input type="text" placeholder="Искать" onChange={getValFromInput} />;
}
