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
    dataIndex: 'Name',
    key: 'Name',
    width: '40%'
  },

  {
    title: 'Номинал',
    dataIndex: 'Nominal',
    key: 'Nominal'
  },

  {
    title: 'Курс',
    dataIndex: 'Value',
    key: 'Value'
  }
];

function Index({ newGetData, onChange, getVal }) {
  const list = Object.values({ ...newGetData.Valute });

  return (
    <div className="modal">
      <Table
        onRow={record => ({
          onClick: () => {
            return onChange(record), getVal(record);
          }
        })}
        columns={columns}
        pagination={false}
        dataSource={list}
        scroll={{ y: 550 }}
        rowKey={record => record.ID}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  newGetData
});

export default connect(mapStateToProps)(React.memo(Index));
