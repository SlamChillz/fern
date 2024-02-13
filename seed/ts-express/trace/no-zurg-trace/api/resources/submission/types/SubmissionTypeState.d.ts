/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedTrace from "../../..";
export declare type SubmissionTypeState = SeedTrace.SubmissionTypeState.Test | SeedTrace.SubmissionTypeState.Workspace;
export declare namespace SubmissionTypeState {
    interface Test extends SeedTrace.TestSubmissionState {
        type: "test";
    }
    interface Workspace extends SeedTrace.WorkspaceSubmissionState {
        type: "workspace";
    }
}