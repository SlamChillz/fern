/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const PathParameterExample: core.serialization.ObjectSchema<
    serializers.PathParameterExample.Raw,
    FernOpenapiIr.PathParameterExample
> = core.serialization.objectWithoutOptionalProperties({
    name: core.serialization.string(),
    value: core.serialization.lazy(async () => (await import("../../..")).FullExample),
});

export declare namespace PathParameterExample {
    interface Raw {
        name: string;
        value: serializers.FullExample.Raw;
    }
}