/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {ICON, KIND_CONSUMER, KIND_SUBSCRIPTION, TopicSpec} from './types';
import {IResourceTypeProvider, ResourceProviderType, ResourceRole, ResourceWithSpec} from '@kapeta/ui-web-types';
import {Metadata} from '@kapeta/schemas';
import _ from "lodash";
import {getDefinition} from "./utils";
import ConsumerEditorComponent from "./components/ConsumerEditorComponent";

const packageJson = require('../../package.json');

const ConsumerConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_CONSUMER,
    version: packageJson.version,
    icon: ICON,
    title: 'Subscriber',
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: ConsumerEditorComponent,
    converters: [
        {
            fromKind: KIND_SUBSCRIPTION,
            createFrom: (data: ResourceWithSpec<TopicSpec>): ResourceWithSpec<TopicSpec> => {
                return {
                    kind: data.kind,
                    spec: {
                        port: data.spec.port,
                        payloadType: data.spec.payloadType,
                    },
                    metadata: _.cloneDeep(data.metadata),
                }
            }
        }
    ],
    definition: getDefinition(KIND_CONSUMER),
};

export default ConsumerConfig;
