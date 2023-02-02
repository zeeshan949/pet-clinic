import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Create,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
    DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

export const VisitCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: petSelectProps } = useSelect({
        resource: "pets",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Pet"
                    name={"pet_id"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...petSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Visit Date"
                    name={["visit_date"]}
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
                    label="Description"
                    name={["description"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
