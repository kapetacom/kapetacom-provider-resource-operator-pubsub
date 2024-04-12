/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, {useEffect, useMemo} from 'react';
import {FormField, FormFieldType, useFormContextField} from "@kapeta/ui-web-components";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import {Entity} from "@kapeta/schemas";

const PayloadTypeEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    const entityNames = useMemo(() => {
        if (!props.block.spec.entities?.types) {
            return [];
        }
        return props.block.spec.entities.types.map((e) => e.name);
    }, [props.block.spec.entities?.types]);

    const payloadTypeField = useFormContextField<string>('spec.payloadType.type');
    const payloadStructureField = useFormContextField<Entity>('spec.payloadType.structure');

    const payloadType = payloadTypeField.get();

    useEffect(() => {
        if (!payloadType || !props.block.spec.entities?.types) {
            return;
        }
        const type = payloadType;
        const entity = props.block.spec.entities.types.find((e) => e.name === type);
        if (!entity) {
            return;
        }

        payloadTypeField.set(payloadType);
        payloadStructureField.set(entity);
    }, [payloadTypeField, payloadStructureField, payloadType, props.block.spec.entities?.types]);

    return (
        <FormField
            name={'spec.payloadType.type'}
            type={FormFieldType.ENUM}
            options={entityNames}
            validation={['required']}
            help={'The message payload type'}
        />
    );
};

export default PayloadTypeEditorComponent;
