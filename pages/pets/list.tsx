import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useMany,
} from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
    DeleteButton,
    DateField,
} from "@pankod/refine-antd";

export const PetList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: typeData, isLoading: typeIsLoading } = useMany({
        resource: "types",
        ids: tableProps?.dataSource?.map((item) => item?.type_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: ownerData, isLoading: ownerIsLoading } = useMany({
        resource: "owners",
        ids: tableProps?.dataSource?.map((item) => item?.owner_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column
                    dataIndex={["birth_date"]}
                    title="Birth Date"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["type_id"]}
                    title="Type"
                    render={(value) =>
                        typeIsLoading ? (
                            <>Loading...</>
                        ) : (
                            typeData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["owner_id"]}
                    title="Owner"
                    render={(value) =>
                        ownerIsLoading ? (
                            <>Loading...</>
                        ) : (
                            ownerData?.data?.find((item) => item.id === value)?.first_name
                        )
                    }
                />
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
