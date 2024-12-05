package com.kavin.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kavin.demo.model.User;
import com.kavin.demo.service.RegisterService;

@RestController
public class registerController {

    @Autowired
    RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        return registerService.registerClient(user);
    }

}
