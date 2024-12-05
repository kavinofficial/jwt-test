package com.kavin.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kavin.demo.model.User;
import com.kavin.demo.repository.LoginRepo;
import com.kavin.demo.utils.Jwtutils;

@Service
public class LoginService {
    @Autowired
    LoginRepo loginRepo;
    @Autowired
    Jwtutils jwtutils;

    public User loginUser(User user) {
        User loginUser = loginRepo.findByEmailIgnoreCaseAndPassword(user.getEmail(), user.getPassword());
        if (loginUser == null) {
            System.out.println("Login Failed");
            return loginUser;
        }
        String token = jwtutils.generateJwt(loginUser);
        System.out.println(token);
        return loginUser;
    }
}
