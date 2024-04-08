/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, {useMemo} from "react";
import {FormField, FormFieldType} from "@kapeta/ui-web-components";
import {Stack} from "@mui/material";
import {ResourceTypeProviderEditorProps} from "@kapeta/ui-web-types";
import {KIND_TOPIC, TopicSpec} from "../types";

const SubscriptionEditorComponent = (props: ResourceTypeProviderEditorProps) => {
    const topicNames: string[] | undefined = useMemo(() => {
        if (!props.block.spec.consumers) {
            return [];
        }
        return props.block.spec.consumers
            .filter(item => item.kind.startsWith(KIND_TOPIC))
            .map(item => item.spec as unknown as TopicSpec)
            .map((e) => e.topic);
    }, [props.block.spec.consumers]);

    return (
        <Stack className={'pubsub-subscription-editor'} sx={{ height: '100%' }}>
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
