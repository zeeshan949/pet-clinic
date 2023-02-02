import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Create,
    Form,
    useForm,
    Input,
    useSelect,
    DatePicker,
    Select,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

export const PetCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: typeSelectProps } = useSelect({
        resource: "types",
        optionLabel: "name",
    });

    const { selectProps: ownerSelectProps } = useSelect({
        resource: "owners",
        optionLabel: "first_name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
        </Create>
    );
};


export default PetCreate;