/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {KIND_CONSUMER, ICON, KIND_SUBSCRIPTION} from './types';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import { Metadata } from '@kapeta/schemas';
import {getDefinition} from "./utils";
import SubscriptionEditorComponent from "./components/SubscriptionEditorComponent";

const packageJson = require('../../package.json');

export const SubscriptionConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_SUBSCRIPTION,
    version: packageJson.version,
    icon: ICON,
    title: 'Subscription',
    role: ResourceRole.PROVIDES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: SubscriptionEditorComponent,
    consumableKind: KIND_CONSUMER,
    definition: getDefinition(KIND_SUBSCRIPTION),
};

export default SubscriptionConfig;
