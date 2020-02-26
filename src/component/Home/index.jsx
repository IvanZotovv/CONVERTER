import React, { useContext } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { Context } from '../../store/context';
import { electedItem } from '../../store/actions';
import { columsInfo } from './constants';
import './style.scss';

function Index({ elected }) {
  const { list } = useContext(Context);
  const dispatch = useDispatch();

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
              dataSource={[...new Set(elected)]}
              rowKey={record => record.ID}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  elected: state.elected
});

export default connect(mapStateToProps)(Index);
