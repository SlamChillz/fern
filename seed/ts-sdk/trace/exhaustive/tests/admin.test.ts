/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../src/api";
import { SeedTraceClient } from "../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("Admin", () => {
    test("updateTestSubmissionStatus", async () => {
        const response = await client.admin.updateTestSubmissionStatus(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            SeedTrace.TestSubmissionStatus.stopped()
        );
        expect(response).toEqual(undefined);
    });

    test("sendTestSubmissionUpdate", async () => {
        const response = await client.admin.sendTestSubmissionUpdate(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            {
                updateTime: new Date("2024-01-15T09:30:00.000Z"),
                updateInfo: SeedTrace.TestSubmissionUpdateInfo.running(
                    SeedTrace.RunningSubmissionState.QueueingSubmission
                ),
            }
        );
        expect(response).toEqual(undefined);
    });

    test("updateWorkspaceSubmissionStatus", async () => {
        const response = await client.admin.updateWorkspaceSubmissionStatus(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            SeedTrace.WorkspaceSubmissionStatus.stopped()
        );
        expect(response).toEqual(undefined);
    });

    test("sendWorkspaceSubmissionUpdate", async () => {
        const response = await client.admin.sendWorkspaceSubmissionUpdate(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            {
                updateTime: new Date("2024-01-15T09:30:00.000Z"),
                updateInfo: SeedTrace.WorkspaceSubmissionUpdateInfo.running(
                    SeedTrace.RunningSubmissionState.QueueingSubmission
                ),
            }
        );
        expect(response).toEqual(undefined);
    });

    test("storeTracedTestCase", async () => {
        const response = await client.admin.storeTracedTestCase(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            "string",
            {
                result: {
                    result: {},
                    stdout: "string",
                },
                traceResponses: [
                    {
                        submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                        lineNumber: 1,
                        returnValue: SeedTrace.DebugVariableValue.integerValue(1),
                        expressionLocation: {},
                        stack: {},
                        stdout: "string",
                    },
                ],
            }
        );
        expect(response).toEqual(undefined);
    });

    test("storeTracedTestCaseV2", async () => {
        const response = await client.admin.storeTracedTestCaseV2(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            SeedTrace.v2.TestCaseId("string"),
            [
                {
                    submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                    lineNumber: 1,
                    file: {},
                    returnValue: SeedTrace.DebugVariableValue.integerValue(1),
                    expressionLocation: {},
                    stack: {},
                    stdout: "string",
                },
            ]
        );
        expect(response).toEqual(undefined);
    });

    test("storeTracedWorkspace", async () => {
        const response = await client.admin.storeTracedWorkspace(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            {
                workspaceRunDetails: {
                    exceptionV2: SeedTrace.ExceptionV2.generic({}),
                    exception: {},
                    stdout: "string",
                },
                traceResponses: [
                    {
                        submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                        lineNumber: 1,
                        returnValue: SeedTrace.DebugVariableValue.integerValue(1),
                        expressionLocation: {},
                        stack: {},
                        stdout: "string",
                    },
                ],
            }
        );
        expect(response).toEqual(undefined);
    });

    test("storeTracedWorkspaceV2", async () => {
        const response = await client.admin.storeTracedWorkspaceV2(
            SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
            [
                {
                    submissionId: SeedTrace.SubmissionId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
                    lineNumber: 1,
                    file: {},
                    returnValue: SeedTrace.DebugVariableValue.integerValue(1),
                    expressionLocation: {},
                    stack: {},
                    stdout: "string",
                },
            ]
        );
        expect(response).toEqual(undefined);
    });
});
