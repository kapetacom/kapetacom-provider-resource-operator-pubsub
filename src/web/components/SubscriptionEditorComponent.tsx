/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, {useMemo} from "react";
import {FormField, FormFieldType} from "@kapeta/ui-web-components";
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import {KIND_TOPIC, TopicSpec} from "../types";
import PayloadTypeEditorComponent from "./PayloadTypeEditorComponent";

const SubscriptionEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    const topicNames: string[] = useMemo(() => {
        if (!props.block.spec.consumers) {
            return [];
        }
        return props.block.spec.consumers
            .filter(item => item.kind.startsWith(KIND_TOPIC))
            .map(item => item.spec as unknown as TopicSpec)
            .map((spec) => spec.topic)
            .filter((topic) => topic !== undefined) as string[]
    }, [props.block.spec.consumers]);

    return (
        <Stack className={'pubsub-subscription-editor'} sx={{ height: '100%' }}>
            <PayloadTypeEditorComponent {...props}/>

            <FormField
                name={'spec.topic'}
                type={FormFieldType.ENUM}
                options={topicNames}
                validation={['required']}
                help={'The topic to subscribe to. E.g. "events-topic"'}
            />

            <FormField
                name={'spec.subscription'}
                label={'Subscription Name'}
                validation={['required']}
                help={'Name the subscription. E.g. "events-subscription"'}
            />
        </Stack>
    );
};

export default SubscriptionEditorComponent;
