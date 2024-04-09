/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Fiddle from "../../src/api";
import { FiddleClient } from "../../src/Client";

const client = new FiddleClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Enum", () => {
    test("getAndReturnEnum", async () => {
        const response = await client.endpoints.enum.getAndReturnEnum(Fiddle.types.WeatherReport.Sunny);
        expect(response).toEqual("SUNNY");
    });
});
