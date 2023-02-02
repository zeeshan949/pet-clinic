import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@pankod/refine-core";
import { Show, Typography, NumberField } from "@pankod/refine-antd";
import exp from "constants";

const { Title } = Typography;

export const VetSpecialtyShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: vetData, isLoading: vetIsLoading } = useOne({
        resource: "vets",
        id: record?.vet_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: specialtyData, isLoading: specialtyIsLoading } = useOne({
        resource: "specialties",
        id: record?.specialty_id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Vet</Title>
            {vetIsLoading ? <>Loading...</> : <>{vetData?.data?.first_name}</>}
            <Title level={5}>Specialty</Title>
            {specialtyIsLoading ? (
                <>Loading...</>
            ) : (
                <>{specialtyData?.data?.name}</>
            )}
        </Show>
    );
};


export default VetSpecialtyShow;