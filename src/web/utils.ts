/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

// @ts-ignore
import Definitions from '../../kapeta.yml';

export const getDefinition = (name: string): any => {
    return Definitions.find((definition: any) => definition.metadata.name === name);
};
