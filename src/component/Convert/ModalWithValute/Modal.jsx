import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import { Context } from '../../../store/context';
// import { selectRightValute } from '../../../store/actions';

import './style.scss';

const columns = [
  {
    title: 'Букв.код',
    dataIndex: 'CharCode',
    key: 'CharCode'
  },
  {
    title: 'Страна',
    dataIndex: 'CharCode',
    key: 'Name',
    width: '40%'
  },
  {
    title: 'Курс',
    dataIndex: 'CharCode',
    key: 'Value'
  }
];

export default function Index({ onChange }) {
  const { list } = useContext(Context);

  return (
    <div className="modal">
      <ul className="modal-list">
        <Table
          columns={columns}
          onRow={el => ({
            onClick: () => onChange(el)
          })}
          pagination={false}
          dataSource={list}
          rowKey={record => record.ID}
        />
      </ul>
    </div>
  );
}
