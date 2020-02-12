import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { loadData, electedItem } from '../../store/actions';
import { columsInfo } from './constants';
import './style.scss';

function Index(props) {
  const [loading, setLoading] = useState(false);
  const { items, elected } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
    setLoading(true);
  }, [dispatch]);

  const getValue = item => {
    dispatch(electedItem(item));
  };

  const toArray = Object.values({ ...items.Valute });

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
      {loading ? (
        <div className="table-block">
          <p>
            Центральный банк Российской Федерации установил следующие курсы
            иностранных валют к рублю Российской Федерации
          </p>
          <div className="table-block-info">
            <div className="table-block-main-list">
              <Table
                columns={columns}
                pagination={false}
                dataSource={toArray}
              />
            </div>
            <div className="table-block-elected-list">
              <Table
                columns={columsInfo}
                pagination={false}
                dataSource={[...new Set(elected)]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.data,
  elected: state.elected
});

export default connect(mapStateToProps)(Index);
