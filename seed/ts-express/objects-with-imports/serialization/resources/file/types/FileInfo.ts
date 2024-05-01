/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedObjectsWithImports from "../../../../api/index";
import * as core from "../../../../core";

export const FileInfo: core.serialization.Schema<serializers.FileInfo.Raw, SeedObjectsWithImports.FileInfo> =
    core.serialization.enum_(["REGULAR", "DIRECTORY"]);

export declare namespace FileInfo {
    type Raw = "REGULAR" | "DIRECTORY";
}