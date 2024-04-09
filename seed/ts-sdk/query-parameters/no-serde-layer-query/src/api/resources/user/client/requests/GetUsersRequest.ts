/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedQueryParameters from "../../../..";

/**
 * @example
 *     {
 *         limit: 1,
 *         id: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
 *         date: "2023-01-15",
 *         deadline: new Date("2024-01-15T09:30:00.000Z"),
 *         bytes: "SGVsbG8gd29ybGQh",
 *         user: {
 *             name: "string",
 *             tags: ["string"]
 *         },
 *         keyValue: {
 *             "string": "string"
 *         },
 *         optionalString: "string",
 *         nestedUser: {
 *             name: "string",
 *             user: {
 *                 name: "string",
 *                 tags: ["string"]
 *             }
 *         },
 *         optionalUser: {
 *             name: "string",
 *             tags: ["string"]
 *         },
 *         excludeUser: {
 *             name: "string",
 *             tags: ["string"]
 *         },
 *         filter: "string"
 *     }
 */
export interface GetUsersRequest {
    limit: number;
    id: string;
    date: string;
    deadline: string;
    bytes: string;
    user: SeedQueryParameters.User;
    keyValue: Record<string, string>;
    optionalString?: string;
    nestedUser: SeedQueryParameters.NestedUser;
    optionalUser?: SeedQueryParameters.User;
    excludeUser: SeedQueryParameters.User | SeedQueryParameters.User[];
    filter: string | string[];
}
