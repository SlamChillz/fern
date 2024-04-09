/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedMultiUrlEnvironmentClient } from "../src/Client";

const client = new SeedMultiUrlEnvironmentClient({
    environment: { ec2: process.env.TESTS_BASE_URL || "test", s3: process.env.TESTS_BASE_URL || "test" },
    token: process.env.TESTS_AUTH || "test",
});

describe("Ec2", () => {
    test("bootInstance", async () => {
        const response = await client.ec2.bootInstance({
            size: "string",
        });
        expect(response).toEqual(undefined);
    });
});
