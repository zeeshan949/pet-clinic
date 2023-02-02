import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Edit,
    Form,
    useForm,
    Input,
    useSelect,
    DatePicker,
    Select,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

export const PetEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const petsData = queryResult?.data?.data;

    const { selectProps: typeSelectProps } = useSelect({
        resource: "types",
        defaultValue: petsData?.type_id,
        optionLabel: "name",
    });

    const { selectProps: ownerSelectProps } = useSelect({
        resource: "owners",
        defaultValue: petsData?.owner_id,
        optionLabel: "first_name",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Id"
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birth Date"
                    name={["birth_date"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : undefined,
                    })}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Type"
                    name={"type_id"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...typeSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Owner"
                    name={"owner_id"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...ownerSelectProps} />
                </Form.Item>
            </Form>
        </Edit>
    );
};
