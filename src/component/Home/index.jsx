import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, Tag } from 'antd';
import { createStructuredSelector } from 'reselect';
import { newGetData, newGetElectedItem } from '../../store/selectors';
import './style.scss';
import { filteringArray } from './utils';
import HomeInput from './Input/HomeInput';
const columns = [
  {
    title: 'Букв.код',
    dataIndex: 'CharCode',
    key: 'CharCode'
  },
  {
    title: 'Числ.код',
    dataIndex: 'NumCode',
    key: 'NumCode'
  },
  {
    title: 'Номинал',
    dataIndex: 'Nominal',
    key: 'Nominal'
  },
  {
    title: 'Страна',
    dataIndex: 'Name',
    key: 'Name',
    width: '40%'
  },
  {
    title: 'Разница',
    dataIndex: 'Difference',
    key: 'Difference',
    render: Difference => (
      <span>
        <Tag color={Difference > 0 ? 'green' : 'red'} key={Difference}>
          {Difference}
        </Tag>
      </span>
    )
  },
  {
    title: 'Курс',
    dataIndex: 'Value',
    key: 'Value'
  }
];

function Index({ newGetData }) {
  const [newList, setNewList] = useState([]);

  const list = filteringArray(newGetData.Valute);

  const sendValueFromInput = val =>
    setNewList(list.filter(i => i.Name.toLowerCase().includes(val)));

  return (
    <div className="table">
      <h2 className="table-header">Home</h2>
      <div className="table-block">
        <p className="table-block-page">
          Центральный банк Российской Федерации установил следующие курсы
          иностранных валют к рублю Российской Федерации
        </p>
        <div className="table-input">
          <HomeInput sendValueFromInput={sendValueFromInput} />
        </div>
        <div className="table-block-info">
          <Table
            columns={columns}
            pagination={false}
            dataSource={newList.length > 0 ? newList : list}
            rowKey={record => record.ID}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  newGetData,
  newGetElectedItem
});

export default connect(mapStateToProps)(React.memo(Index));
