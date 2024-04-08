/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {KIND_PROVIDER, KIND_TOPIC, ICON} from './types';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import { Metadata } from '@kapeta/schemas';
import {getDefinition} from "./utils";
import ProviderEditorComponent from "./components/ProviderEditorComponent";

const packageJson = require('../../package.json');

export const ProviderConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_PROVIDER,
    version: packageJson.version,
    icon: ICON,
    title: 'Publisher',
    role: ResourceRole.PROVIDES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: ProviderEditorComponent,
    consumableKind: KIND_TOPIC,
    definition: getDefinition(KIND_PROVIDER),
};

export default ProviderConfig;
