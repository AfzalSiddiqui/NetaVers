package com.netavers.auth;

public class AuthService {

    public boolean authenticate(String token) {
        return token != null && !token.isEmpty();
    }
}
