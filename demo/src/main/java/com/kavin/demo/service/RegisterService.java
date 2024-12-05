package com.kavin.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<?> registerClient(User user) {
        User existingUser = registerRepo.findByEmailIgnoreCase(user.getEmail());
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Email Already exists");
        }
        String token = jwtutils.generateJwt(user);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(token);
    }
}
