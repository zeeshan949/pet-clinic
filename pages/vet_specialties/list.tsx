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
} from "@pankod/refine-antd";

export const VetSpecialtyList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: vetData, isLoading: vetIsLoading } = useMany({
        resource: "vets",
        ids: tableProps?.dataSource?.map((item) => item?.vet_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: specialtyData, isLoading: specialtyIsLoading } = useMany({
        resource: "specialties",
        ids: tableProps?.dataSource?.map((item) => item?.specialty_id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column
                    dataIndex={["vet_id"]}
                    title="Vet"
                    render={(value) =>
                        vetIsLoading ? (
                            <>Loading...</>
                        ) : (
                            vetData?.data?.find((item) => item.id === value)?.first_name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["specialty_id"]}
                    title="Specialty"
                    render={(value) =>
                        specialtyIsLoading ? (
                            <>Loading...</>
                        ) : (
                            specialtyData?.data?.find(
                                (item) => item.id === value,
                            )?.name
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

export default VetSpecialtyList;