/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from "react";
import {FormField, FormFieldType} from "@kapeta/ui-web-components";

const TopicEditorComponent = () => {

    return (
        <div className={"pubsub-provider-editor"}>
            <FormField name={"spec.topic"} label={"Name"} help="Topic name" type={FormFieldType.STRING} validation={["required"]}/>
        </div>
    );
};

export default TopicEditorComponent;
