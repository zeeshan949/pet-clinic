import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Edit,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
} from "@pankod/refine-antd";

export const VetSpecialtyEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const vetSpecialtiesData = queryResult?.data?.data;

    const { selectProps: vetSelectProps } = useSelect({
        resource: "vets",
        defaultValue: vetSpecialtiesData?.vet_id,
        optionLabel: "first_name",
    });

    const { selectProps: specialtySelectProps } = useSelect({
        resource: "specialties",
        defaultValue: vetSpecialtiesData?.specialty_id,
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
        </Edit>
    );
};
