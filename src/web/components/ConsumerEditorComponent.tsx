/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import PayloadTypeEditorComponent from "./PayloadTypeEditorComponent";

const ConsumerEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    return (
        <Stack className={'pubsub-provider-editor'} sx={{ height: '100%' }}>
            <PayloadTypeEditorComponent {...props}/>
        </Stack>
    );
};

export default ConsumerEditorComponent;
