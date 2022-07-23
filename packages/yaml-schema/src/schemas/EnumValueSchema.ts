import { z } from "zod";
import { WithDocsSchema } from "./WithDocsSchema";

export const EnumValueSchema = z.union([
    z.string(),
    WithDocsSchema.extend({
        name: z.optional(z.string()),
        value: z.string(),
    }),
]);

export type EnumValueSchema = z.infer<typeof EnumValueSchema>;
