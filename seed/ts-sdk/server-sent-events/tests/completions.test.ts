/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedServerSentEventsClient } from "../src/Client";

const client = new SeedServerSentEventsClient({ environment: process.env.TESTS_BASE_URL || "test" });

describe("Completions", () => {
    test("stream", async () => {
        const response = await client.completions.stream({
            query: "string",
        });
        expect(response).toEqual({ delta: "string", tokens: 1 });
    });
});