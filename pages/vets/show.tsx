import React from "react";
import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    TagField,
    TextField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const VetShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>First Name</Title>
            <TextField value={record?.first_name} />
            <Title level={5}>Last Name</Title>
            <TextField value={record?.last_name} />
        </Show>
    );
};


export default VetShow;