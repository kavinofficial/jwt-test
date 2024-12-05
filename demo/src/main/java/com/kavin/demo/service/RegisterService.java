package com.kavin.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kavin.demo.model.User;
import com.kavin.demo.repository.RegisterRepo;
import com.kavin.demo.utils.Jwtutils;

@Service
public class RegisterService {
    @Autowired
    RegisterRepo registerRepo;
    @Autowired
    Jwtutils jwtutils;

    public User registerClient(User user) {
        jwtutils.generateJwt(user);
        return registerRepo.save(user);
    }
}
