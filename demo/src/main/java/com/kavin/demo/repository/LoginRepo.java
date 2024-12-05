package com.kavin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kavin.demo.model.User;

@Repository
public interface LoginRepo extends JpaRepository<User, Long> {
    User findByEmailIgnoreCaseAndPassword(String email, String password);
}
