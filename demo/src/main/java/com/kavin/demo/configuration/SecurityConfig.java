package com.kavin.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(authz -> authz
                .requestMatchers("/login", "/register").permitAll() // Public endpoints
                .anyRequest().authenticated() // Protect all other endpoints
        )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/oauth2/authorization/google") // Redirects to OAuth login page
                        .defaultSuccessUrl("/home") // Redirect after successful login
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/login").permitAll());

        return http.build();
    }
}