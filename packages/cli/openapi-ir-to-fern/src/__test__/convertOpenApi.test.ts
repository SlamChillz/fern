import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { CONSOLE_LOGGER } from "@fern-api/logger";
import { parse } from "@fern-api/openapi-parser";
import { createMockTaskContext } from "@fern-api/task-context";
import path from "path";
import { convert } from "../convert";

const FIXTURES_PATH = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));

describe("open api converter", () => {
    testFixture("vellum", "openapi.yml");
});

function testFixture(fixtureName: string, filename: string) {
    // eslint-disable-next-line jest/valid-title
    describe(fixtureName, () => {
        it("simple", async () => {
            const openApiPath = path.join(FIXTURES_PATH, fixtureName, filename);
            const openApiIr = await parse({
                openApiPath: AbsoluteFilePath.of(openApiPath),
                taskContext: createMockTaskContext({ logger: CONSOLE_LOGGER }),
            });
            const fernDefinition = convert({ openApiIr });
            expect(fernDefinition).toMatchSnapshot();
        });
    });
}