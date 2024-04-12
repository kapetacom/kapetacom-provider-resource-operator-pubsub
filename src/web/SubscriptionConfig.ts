/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {ICON, KIND_CONSUMER, KIND_SUBSCRIPTION} from './types';
import {IResourceTypeProvider, ResourceProviderType, ResourceRole} from '@kapeta/ui-web-types';
import {Metadata} from '@kapeta/schemas';
import {getDefinition, renameEntityReferences, resolveEntities} from "./utils";
import SubscriptionEditorComponent from "./components/SubscriptionEditorComponent";

const packageJson = require('../../package.json');

export const SubscriptionConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_SUBSCRIPTION,
    version: packageJson.version,
    title: 'Subscription',
    icon: ICON,
    role: ResourceRole.PROVIDES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: SubscriptionEditorComponent,
    consumableKind: KIND_CONSUMER,
    renameEntityReferences,
    resolveEntities,
    definition: getDefinition(KIND_SUBSCRIPTION),
    capabilities: {
        directDSL: true,
    }
};

export default SubscriptionConfig;
