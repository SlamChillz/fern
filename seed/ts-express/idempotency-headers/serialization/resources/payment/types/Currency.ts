/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedIdempotencyHeaders from "../../../../api/index";
import * as core from "../../../../core";

export const Currency: core.serialization.Schema<serializers.Currency.Raw, SeedIdempotencyHeaders.Currency> =
    core.serialization.enum_(["USD", "YEN"]);

export declare namespace Currency {
    type Raw = "USD" | "YEN";
}