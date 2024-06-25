/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { BlockTypeShapeProps } from '@kapeta/ui-web-types';
import {
    BlockHandle,
    BlockInstanceName,
    BlockName,
    BlockStatus,
    BlockVersion,
    useBlock,
} from '@kapeta/ui-web-components';
import React from 'react';
import { Metadata } from '@kapeta/schemas';

export const QueueBlockShapeComponent = <TBlockType extends Metadata>(props: BlockTypeShapeProps<TBlockType>) => {
    // Scaling the topbar svg to fit the block
    const block = useBlock();
    const idPrefix = `pubsub-${props.instance.id.replace(/[^a-z0-9]/gi, '')}`;
    const consumerMaskId = `${idPrefix}-consumer-mask`;
    const providerMaskId = `${idPrefix}-provider-mask`;

    return (
        <g className="block-node" style={{ cursor: block.readOnly ? 'default' : 'move' }}>
            {/* Background */}
            <rect className="block-body" width={props.width} height={props.height} rx="6" fill="white" />

            {/* Border */}
            <rect
                className="block-border"
                x="0.5"
                y="0.5"
                width={props.width - 1}
                height={props.height - 1}
                rx="5.5"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeOpacity="0.12"
            />

            {/* Consumer BG */}
            <mask id={consumerMaskId}>
                <rect x="0" y="0" width="23" height={props.height} fill="white" />
            </mask>
            <rect
                x="1"
                y="1"
                rx="5"
                width={40}
                height={props.height - 2}
                fill="black"
                fillOpacity="0.12"
                strokeWidth={'0'}
                mask={`url(#${consumerMaskId})`}
            />

            {/* Provider BG */}
            <mask id={providerMaskId}>
                <rect x={props.width - 41 + 23 - 5.5} y="0" width="23" height={props.height} fill="white" />
            </mask>
            <rect
                x={props.width - 41}
                y="1"
                rx="5"
                width={40}
                height={props.height - 2}
                fill="black"
                fillOpacity="0.12"
                strokeWidth={'0'}
                mask={`url(#${providerMaskId})`}
            />
            {/* Consumer icon */}
            <svg
                x={3}
                y={props.height / 2 - 13.5}
                width="16"
                height="27"
                viewBox="0 0 16 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0H7V6.58594L9 8.58594L9 0ZM9 17.4144L7 19.4144V27H9V17.4144ZM1 15H3L3 27H1L1 15ZM13 0H15L15 27H13V13.4144L13.4142 13.0002L13 12.5859V0ZM6 7L4.9425 8.0575L9.1275 12.25H0V13.75H9.1275L4.9425 17.9425L6 19L12 13L6 7ZM3 0H1L1 11H3L3 0Z"
                    fill="white"
                />
            </svg>

            {/* Provider icon */}
            <svg
                x={props.width - 21}
                y={props.height / 2 - 13.5}
                width="16"
                height="27"
                viewBox="0 0 16 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0H7V6.58594L9 8.58594L9 0ZM9 17.4144L7 19.4144V27H9V17.4144ZM1 15H3L3 27H1L1 15ZM13 0H15L15 27H13V13.4144L13.4142 13.0002L13 12.5859V0ZM6 7L4.9425 8.0575L9.1275 12.25H0V13.75H9.1275L4.9425 17.9425L6 19L12 13L6 7ZM3 0H1L1 11H3L3 0Z"
                    fill="white"
                />
            </svg>

            <svg fill="none" x={props.width - 22} y={-28}>
                <BlockStatus />
            </svg>
            {/* Offset if block has error */}
            <svg fill="none" x={props.width / 2 - 12} y={35} width={props.width - 22} viewBox="0 0 150 150">
                <BlockInstanceName />
            </svg>
            <svg fill="none" x={props.width / 2} y={75}>
                <BlockName />
            </svg>

            <svg x={props.width / 2} y={95}>
                <BlockHandle />
            </svg>

            <svg y={props.height - 20} x={props.width / 2}>
                <BlockVersion />
            </svg>
        </g>
    );
};
