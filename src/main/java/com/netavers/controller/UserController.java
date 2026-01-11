package com.netavers.controller;

import com.netavers.service.UserService;

public class UserController {

    private final UserService userService = new UserService();

    public void handleCreateUser() {
        userService.createUser("1", "Admin");
    }
}
