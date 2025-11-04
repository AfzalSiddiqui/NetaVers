package com.netavers.validation;

public class InputValidator {
    public boolean isValid(String input) {
        return input != null && !input.isEmpty();
    }
}
