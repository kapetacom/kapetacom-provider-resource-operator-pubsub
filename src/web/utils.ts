/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

// @ts-ignore
import Definitions from '../../kapeta.yml';
import {ResourceWithSpec} from "@kapeta/ui-web-types";
import {TopicSpec} from "./types";

export const getDefinition = (name: string): any => {
    console.log("getDefinition", name);
    return Definitions.find((definition: any) => definition.metadata.name === name);
};

export function renameEntityReferences(resource: ResourceWithSpec<TopicSpec>, oldName: string, newName: string) {
    if (resource.spec.payloadType.type === oldName) {
        resource.spec.payloadType.type = newName;
    }
}

export function resolveEntities(resource: ResourceWithSpec<TopicSpec>): string[] {
    console.log("resolveEntities");
    return [resource.spec.payloadType.type];
}
