import React from 'react';
import { Input } from 'antd';

export default function Index() {
  return (
    <div>
      <h2>Converter</h2>
      <div className="converter">
        <div className="converter-form">
          <Input placeholder="Basic usage" />
        </div>
        <div className="converter-to">
          <Input placeholder="Basic usage" />
        </div>
      </div>
    </div>
  );
}
