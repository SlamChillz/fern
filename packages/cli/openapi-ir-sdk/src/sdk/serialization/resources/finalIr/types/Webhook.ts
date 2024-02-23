/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, FernOpenapiIr.Webhook> =
    core.serialization
        .objectWithoutOptionalProperties({
            sdkName: core.serialization.lazyObject(async () => (await import("../../..")).EndpointSdkName).optional(),
            method: core.serialization.lazy(async () => (await import("../../..")).WebhookHttpMethod),
            summary: core.serialization.string().optional(),
            operationId: core.serialization.string(),
            tags: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).TagId)),
            headers: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).Header)
            ),
            generatedPayloadName: core.serialization.string(),
            payload: core.serialization.lazy(async () => (await import("../../..")).Schema),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace Webhook {
    interface Raw extends serializers.WithDescription.Raw {
        sdkName?: serializers.EndpointSdkName.Raw | null;
        method: serializers.WebhookHttpMethod.Raw;
        summary?: string | null;
        operationId: string;
        tags: serializers.TagId.Raw[];
        headers: serializers.Header.Raw[];
        generatedPayloadName: string;
        payload: serializers.Schema.Raw;
    }
}