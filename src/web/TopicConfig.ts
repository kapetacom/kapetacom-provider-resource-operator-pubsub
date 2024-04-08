/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {ICON, KIND_PROVIDER, KIND_TOPIC, TopicSpec} from './types';
import {IResourceTypeProvider, ResourceProviderType, ResourceRole, ResourceWithSpec} from '@kapeta/ui-web-types';
import {Metadata} from '@kapeta/schemas';
import _ from "lodash";
import {getDefinition} from "./utils";
import TopicEditorComponent from "./components/TopicEditorComponent";

const packageJson = require('../../package.json');

const TopicConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_TOPIC,
    version: packageJson.version,
    icon: ICON,
    title: 'Topic',
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: TopicEditorComponent,
    converters: [
        {
            fromKind: KIND_PROVIDER,
            createFrom: (data: ResourceWithSpec<TopicSpec>): ResourceWithSpec<TopicSpec> => {
                return {
                    kind: data.kind,
                    spec: {
                        port: data.spec.port,
                        topic: data.spec.topic,
                    },
                    metadata: _.cloneDeep(data.metadata),
                }
            }
        }
    ],
    definition: getDefinition(KIND_TOPIC),
    capabilities: {
        directDSL: true,
        allowMultipleConnections: true,
    }
};

export default TopicConfig;
