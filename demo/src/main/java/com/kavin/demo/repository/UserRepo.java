package com.kavin.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kavin.demo.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
