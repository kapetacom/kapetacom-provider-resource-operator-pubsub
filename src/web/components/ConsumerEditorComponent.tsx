/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import PayloadTypeEditorComponent from "./PayloadTypeEditorComponent";
import {FormField} from "@kapeta/ui-web-components";
import {validateName} from "../utils";

const ConsumerEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    return (
        <Stack className={'pubsub-provider-editor'} sx={{ height: '100%' }}>
            <FormField
                name={'metadata.name'}
                label={'Name'}
                validation={['required', validateName]}
                help={'Name your resource. E.g. "events"'}
            />

            <PayloadTypeEditorComponent {...props}/>
        </Stack>
    );
};

export default ConsumerEditorComponent;
