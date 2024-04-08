/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, {useMemo} from 'react';
import {FormField, FormFieldType} from "@kapeta/ui-web-components";
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";

const ConsumerEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    const entityNames = useMemo(() => {
        if (!props.block.spec.entities?.types) {
            return [];
        }
        return props.block.spec.entities.types.map((e) => e.name);
    }, [props.block.spec.entities?.types]);

    return (
        <Stack className={'pubsub-provider-editor'} sx={{ height: '100%' }}>
            <FormField
                name={'spec.payloadType.type'}
                type={FormFieldType.ENUM}
                options={entityNames}
                validation={['required']}
                help={'The message payload type'}
            />
        </Stack>
    );
};

export default ConsumerEditorComponent;
