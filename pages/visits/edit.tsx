import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Edit,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
    DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

export const VisitEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const visitsData = queryResult?.data?.data;

    const { selectProps: petSelectProps } = useSelect({
        resource: "pets",
        defaultValue: visitsData?.pet_id,
        optionLabel: "name",
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
        </Edit>
    );
};


export default VisitEdit;