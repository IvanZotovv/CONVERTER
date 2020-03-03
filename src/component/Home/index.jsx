import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { createStructuredSelector } from 'reselect';
import { electedItem } from '../../store/actions';
import { columsInfo } from './constants';
import { newGetData, newGetElectedItem } from '../../store/selectors';
import './style.scss';

function Index({ newGetData, newGetElectedItem }) {
  const dispatch = useDispatch();

  const list = Object.values({ ...newGetData.Valute });

  const getValue = item => dispatch(electedItem(item));

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
      title: 'Курс',
      dataIndex: 'Value',
      key: 'Value'
    },
    {
      title: 'Добавить',
      dataIndex: '',
      render: text => (
        <Button type="primary" onClick={() => getValue(text)}>
          В избранное
        </Button>
      )
    }
  ];

  return (
    <div className="table">
      <h2>Home</h2>
      <div className="table-block">
        <p>
          Центральный банк Российской Федерации установил следующие курсы
          иностранных валют к рублю Российской Федерации
        </p>
        <div className="table-block-info">
          <div className="table-block-main-list">
            <Table columns={columns} pagination={false} dataSource={list} />
          </div>
          <div className="table-block-elected-list">
            <Table
              columns={columsInfo}
              pagination={false}
              dataSource={[...new Set(newGetElectedItem)]}
              rowKey={record => record.ID}
            />
          </div>
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
