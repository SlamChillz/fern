import { visitRawTypeDeclaration } from "@fern-api/yaml-schema";
import { Rule, RuleViolation } from "../../Rule";
import { validateEnumNames } from "./validateEnumNames";
import { validateUnionNames } from "./validateUnionNames";

export const ValidFieldNamesRule: Rule = {
    name: "valid-field-names",
    create: () => {
        return {
            typeDeclaration: ({ declaration }) => {
                return visitRawTypeDeclaration<RuleViolation[]>(declaration, {
                    alias: () => [],
                    enum: validateEnumNames,
                    object: () => [],
                    union: validateUnionNames,
                });
            },
        };
    },
};