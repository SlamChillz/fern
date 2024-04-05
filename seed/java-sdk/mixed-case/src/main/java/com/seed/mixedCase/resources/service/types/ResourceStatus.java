/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.mixedCase.resources.service.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ResourceStatus {
    ACTIVE("ACTIVE"),

    INACTIVE("INACTIVE");

    private final String value;

    ResourceStatus(String value) {
        this.value = value;
    }

    @JsonValue
    @java.lang.Override
    public String toString() {
        return this.value;
    }
}