/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedTraceClient } from "../../src/Client";

const client = new SeedTraceClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
    xRandomHeader: process.env.TESTS_HEADER || "test",
});

describe("V2", () => {
    test("test", async () => {
        const response = await client.v2.test();
        expect(response).toEqual(undefined);
    });
});
