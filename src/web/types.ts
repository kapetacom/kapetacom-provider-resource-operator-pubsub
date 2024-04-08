/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {Entity, IconType, IconValue} from "@kapeta/schemas";

export const KIND_PROVIDER = 'kapeta/resource-type-pubsub-publisher';
export const KIND_CONSUMER = 'kapeta/resource-type-pubsub-subscriber';
export const KIND_TOPIC = 'kapeta/resource-type-pubsub-topic';
export const KIND_SUBSCRIPTION = 'kapeta/resource-type-pubsub-subscription';
export const KIND_OPERATOR = 'kapeta/block-type-pubsub';

export const ICON: IconValue = {
    type: IconType.URL,
    value: 'https://storage.googleapis.com/kapeta-public-cdn/icons/gcp-pub-sub.svg',
};

export interface TopicSpec {
    port: {
        type: 'http';
    };
    topic?: string;
    payloadType?: PayloadType;
}

export interface SubscriptionSpec extends TopicSpec {
    subscription?: string;
}

export interface PayloadType {
    type: string;
    structure?: Entity;
}
