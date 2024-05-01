/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const ProblemInfo: core.serialization.ObjectSchema<serializers.ProblemInfo.Raw, SeedTrace.ProblemInfo> =
    core.serialization.object({
        problemId: core.serialization.lazy(async () => (await import("../../..")).ProblemId),
        problemDescription: core.serialization.lazyObject(async () => (await import("../../..")).ProblemDescription),
        problemName: core.serialization.string(),
        problemVersion: core.serialization.number(),
        files: core.serialization.record(
            core.serialization.lazy(async () => (await import("../../..")).Language),
            core.serialization.lazyObject(async () => (await import("../../..")).ProblemFiles).optional()
        ),
        inputParams: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).VariableTypeAndName)
        ),
        outputType: core.serialization.lazy(async () => (await import("../../..")).VariableType),
        testcases: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).TestCaseWithExpectedResult)
        ),
        methodName: core.serialization.string(),
        supportsCustomTestCases: core.serialization.boolean(),
    });

export declare namespace ProblemInfo {
    interface Raw {
        problemId: serializers.ProblemId.Raw;
        problemDescription: serializers.ProblemDescription.Raw;
        problemName: string;
        problemVersion: number;
        files: Record<serializers.Language.Raw, serializers.ProblemFiles.Raw | null | undefined>;
        inputParams: serializers.VariableTypeAndName.Raw[];
        outputType: serializers.VariableType.Raw;
        testcases: serializers.TestCaseWithExpectedResult.Raw[];
        methodName: string;
        supportsCustomTestCases: boolean;
    }
}