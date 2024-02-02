/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const AvailabilityStatus: core.serialization.Schema<
    serializers.AvailabilityStatus.Raw,
    FernIr.AvailabilityStatus
> = core.serialization.enum_(["IN_DEVELOPMENT", "PRE_RELEASE", "GENERAL_AVAILABILITY", "DEPRECATED"]);

export declare namespace AvailabilityStatus {
    type Raw = "IN_DEVELOPMENT" | "PRE_RELEASE" | "GENERAL_AVAILABILITY" | "DEPRECATED";
}