import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    DateField,
    TagField,
    TextField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const VisitShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: petData, isLoading: petIsLoading } = useOne({
        resource: "pets",
        id: record?.pet_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Pet</Title>
            {petIsLoading ? <>Loading...</> : <>{petData?.data?.name}</>}
            <Title level={5}>Visit Date</Title>
            <DateField value={record?.visit_date} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
        </Show>
    );
};
