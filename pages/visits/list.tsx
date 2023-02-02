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

export const VisitList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: petData, isLoading: petIsLoading } = useMany({
        resource: "pets",
        ids: tableProps?.dataSource?.map((item) => item?.pet_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column
                    dataIndex={["pet_id"]}
                    title="Pet"
                    render={(value) =>
                        petIsLoading ? (
                            <>Loading...</>
                        ) : (
                            petData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["visit_date"]}
                    title="Visit Date"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column dataIndex="description" title="Description" />
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

export default VisitList;