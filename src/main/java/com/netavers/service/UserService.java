package com.netavers.service;

import com.netavers.user.User;

public class UserService {

    public User createUser(String id, String name) {
        return new User(id, name);
    }
}
