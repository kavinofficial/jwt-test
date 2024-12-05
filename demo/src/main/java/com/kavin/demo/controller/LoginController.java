package com.kavin.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.kavin.demo.model.User;
import com.kavin.demo.service.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        return loginService.loginUser(user);
    }

}
