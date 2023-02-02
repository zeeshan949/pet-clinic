import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    TagField,
    TextField,
    DateField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const PetShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: typeData, isLoading: typeIsLoading } = useOne({
        resource: "types",
        id: record?.type_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: ownerData, isLoading: ownerIsLoading } = useOne({
        resource: "owners",
        id: record?.owner_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Birth Date</Title>
            <DateField value={record?.birth_date} />
            <Title level={5}>Type</Title>
            {typeIsLoading ? <>Loading...</> : <>{typeData?.data?.name}</>}
            <Title level={5}>Owner</Title>
            {ownerIsLoading ? <>Loading...</> : <>{ownerData?.data?.first_name}</>}
        </Show>
    );
};


export default PetShow;