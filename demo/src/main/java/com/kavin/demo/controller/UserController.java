package com.kavin.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.kavin.demo.model.User;
import com.kavin.demo.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

}
