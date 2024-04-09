/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedSingleUrlEnvironmentNoDefaultClient } from "../src/Client";

const client = new SeedSingleUrlEnvironmentNoDefaultClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Dummy", () => {
    test("getDummy", async () => {
        const response = await client.dummy.getDummy();
        expect(response).toEqual("string");
    });
});
