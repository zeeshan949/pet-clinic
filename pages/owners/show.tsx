import React from "react";
import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    TagField,
    TextField,
} from "@pankod/refine-antd";
import exp from "constants";

const { Title } = Typography;

export const OwnerShow: React.FC<IResourceComponentsProps> = () => {
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
            <Title level={5}>Address</Title>
            <TextField value={record?.address} />
            <Title level={5}>City</Title>
            <TextField value={record?.city} />
            <Title level={5}>Telephone</Title>
            <TextField value={record?.telephone} />
        </Show>
    );
};


export default OwnerShow;