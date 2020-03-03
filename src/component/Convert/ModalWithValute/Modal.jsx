import React from 'react';
import { Table } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { newGetData } from '../../../store/selectors';

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

function Index({ newGetData, onChange, getVal }) {
  const list = Object.values({ ...newGetData.Valute });

  console.log(list);

  return (
    <div className="modal">
      <ul className="modal-list">
        <Table
          columns={columns}
          onRow={el => ({
            onClick: () => {
              return onChange(el), getVal(el);
            }
          })}
          pagination={false}
          dataSource={list}
          rowKey={record => record.ID}
        />
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  newGetData
});

export default connect(mapStateToProps)(React.memo(Index));
