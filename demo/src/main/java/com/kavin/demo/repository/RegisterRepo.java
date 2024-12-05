package com.kavin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kavin.demo.model.User;

public interface RegisterRepo extends JpaRepository<User, Long> {
    User findByEmailIgnoreCase(String email);
}
