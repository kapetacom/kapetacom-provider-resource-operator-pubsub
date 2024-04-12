/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import PayloadTypeEditor from "./PayloadTypeEditorComponent";

const ProviderEditorComponent = (props: ResourceTypeProviderEditorProps) => {

    return (
        <Stack className={'pubsub-provider-editor'} sx={{ height: '100%' }}>
            <PayloadTypeEditor {...props}/>
        </Stack>
    );
};

export default ProviderEditorComponent;
