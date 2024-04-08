/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {ICON, KIND_OPERATOR, KIND_SUBSCRIPTION, KIND_TOPIC} from './types';
import {IBlockTypeProvider} from '@kapeta/ui-web-types';
import {Metadata} from '@kapeta/schemas';
import {getDefinition} from "./utils";
import OperatorEditorComponent from "./components/OperatorEditorComponent";

const packageJson = require('../../package.json');

const OperatorConfig: IBlockTypeProvider<Metadata> = {
    kind: KIND_OPERATOR,
    version: packageJson.version,
    title: 'Google Pub/Sub',
    icon: ICON,
    shapeWidth: 196,
    editorComponent: OperatorEditorComponent,
    getShapeHeight: (resourceHeight: number) => Math.max(140, resourceHeight + 50),
//    shapeComponent: QueueBlockShapeComponent,
    resourceKinds: [KIND_TOPIC, KIND_SUBSCRIPTION],
    definition: getDefinition(KIND_OPERATOR),
};

export default OperatorConfig;
