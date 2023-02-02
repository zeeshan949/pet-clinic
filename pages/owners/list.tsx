import React from "react";
import { IResourceComponentsProps, BaseRecord } from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
    DeleteButton,
} from "@pankod/refine-antd";

export const OwnerList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="first_name" title="First Name" />
                <Table.Column dataIndex="last_name" title="Last Name" />
                <Table.Column dataIndex="address" title="Address" />
                <Table.Column dataIndex="city" title="City" />
                <Table.Column dataIndex="telephone" title="Telephone" />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};


export default OwnerList;