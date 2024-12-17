import { useState } from 'react';

import { TableColumnsType, TableProps, Table as TableAntd } from 'antd';

import './styles.scss';

import Button from '../Button';

const Table = () => {
    interface DataType {
        key: React.Key;
        exerciseName: string;
        sets: number;
        repetitions: number;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Exercício',
            dataIndex: 'exerciseName',
        },
        {
            title: 'Séries',
            dataIndex: 'sets',
        },
        {
            title: 'Repetições',
            dataIndex: 'repetitions',
        },
        {
            dataIndex: 'action',
            render: () => <Button>Ver vídeo</Button>,
        },
    ];

    const fakeData: DataType[] = [
        {
            key: 1,
            exerciseName: 'Elevação pélvica',
            sets: 4,
            repetitions: 12,
        },
        {
            key: 2,
            exerciseName: 'Extensão de quadril',
            sets: 4,
            repetitions: 12,
        },
        {
            key: 3,
            exerciseName: 'Cadeira flexora',
            sets: 4,
            repetitions: 12,
        },
    ];

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([2]);

    const rowSelection: TableProps<DataType>['rowSelection'] = {
        type: 'checkbox',
        selectedRowKeys,
        onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys);
        },
    };

    const onRow = (record: DataType) => {
        return {
            onClick: () => {
                const currentKey = record?.key;

                const index = selectedRowKeys.findIndex((item) => currentKey === item);

                if (-1 !== index) {
                    const currentSelectedKeys = selectedRowKeys;

                    currentSelectedKeys.splice(index, 1);

                    setSelectedRowKeys([...currentSelectedKeys]);

                    return;
                }

                setSelectedRowKeys([record?.key, ...selectedRowKeys]);
            },
        };
    };

    return (
        <TableAntd<DataType>
            rowSelection={rowSelection}
            onRow={onRow}
            columns={columns}
            dataSource={fakeData}
            pagination={false}
            size="middle"
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Table;
