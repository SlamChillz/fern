/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
export declare const TestCaseMetadata: core.serialization.ObjectSchema<serializers.v2.v3.TestCaseMetadata.Raw, SeedTrace.v2.v3.TestCaseMetadata>;
export declare namespace TestCaseMetadata {
    interface Raw {
        id: serializers.v2.v3.TestCaseId.Raw;
        name: string;
        hidden: boolean;
    }
}