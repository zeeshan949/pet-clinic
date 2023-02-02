import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Create,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
} from "@pankod/refine-antd";

export const VetSpecialtyCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: vetSelectProps } = useSelect({
        resource: "vets",
        optionLabel: "first_name",
    });

    const { selectProps: specialtySelectProps } = useSelect({
        resource: "specialties",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Vet"
                    name={"vet_id"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...vetSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Specialty"
                    name={"specialty_id"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...specialtySelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};
