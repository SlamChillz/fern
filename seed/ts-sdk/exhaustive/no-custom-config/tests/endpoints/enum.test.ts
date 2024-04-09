/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../src/api";
import { SeedExhaustiveClient } from "../../src/Client";

const client = new SeedExhaustiveClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Enum", () => {
    test("getAndReturnEnum", async () => {
        const response = await client.endpoints.enum.getAndReturnEnum(SeedExhaustive.types.WeatherReport.Sunny);
        expect(response).toEqual("SUNNY");
    });
});
