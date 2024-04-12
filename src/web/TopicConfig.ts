/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {ICON, KIND_PROVIDER, KIND_TOPIC, TopicSpec} from './types';
import {IResourceTypeProvider, ResourceProviderType, ResourceRole, ResourceWithSpec} from '@kapeta/ui-web-types';
import {Metadata} from '@kapeta/schemas';
import {cloneDeep} from "lodash";
import {getDefinition, renameEntityReferences, resolveEntities} from "./utils";
import TopicEditorComponent from "./components/TopicEditorComponent";
import {DSLData} from "@kapeta/kaplang-core";

const packageJson = require('../../package.json');

function validate(data: ResourceWithSpec<TopicSpec>): string[] {
    const result: string[] = [];

    if (!data.spec.topic || data.spec.topic.length === 0) {
        result.push("Topic not specified");
    }

    return result;
}

const TopicConfig: IResourceTypeProvider<Metadata, TopicSpec, DSLData> = {
    kind: KIND_TOPIC,
    version: packageJson.version,
    title: 'Topic',
    icon: ICON,
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: TopicEditorComponent,
    renameEntityReferences: renameEntityReferences,
    resolveEntities: resolveEntities,
    validate: validate,
    converters: [
        {
            fromKind: KIND_PROVIDER,
            createFrom: (data: ResourceWithSpec<TopicSpec>): ResourceWithSpec<TopicSpec> => {
                return {
                    kind: data.kind,
                    spec: {
                        port: cloneDeep(data.spec.port),
                        payloadType: cloneDeep(data.spec.payloadType),
                        topic: data.spec.topic,
                    },
                    metadata: cloneDeep(data.metadata),
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
