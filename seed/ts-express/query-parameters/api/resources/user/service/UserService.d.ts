/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedQueryParameters from "../../..";
import express from "express";
export interface UserServiceMethods {
    getUsername(req: express.Request<never, SeedQueryParameters.User, never, {
        limit: number;
        id: string;
        date: string;
        deadline: Date;
        bytes: string;
        user: SeedQueryParameters.User;
        keyValue: Record<string, string>;
        optionalString?: string;
        nestedUser: SeedQueryParameters.NestedUser;
        optionalUser?: SeedQueryParameters.User;
        excludeUser: SeedQueryParameters.User;
        filter: string;
    }>, res: {
        send: (responseBody: SeedQueryParameters.User) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }): void | Promise<void>;
}
export declare class UserService {
    private readonly methods;
    private router;
    constructor(methods: UserServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
