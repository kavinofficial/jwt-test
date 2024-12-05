package com.kavin.demo.utils;

import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.kavin.demo.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class Jwtutils {
    public static String secret = "";

    public Jwtutils() {
        KeyGenerator keyGenerator = null;
        try {
            keyGenerator = KeyGenerator.getInstance("HmacSHA256");
            SecretKey secretKey = keyGenerator.generateKey();
            secret = Base64.getEncoder().encodeToString(secretKey.getEncoded());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    private SecretKey getSigningKey() {
        byte[] by = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(by);
    }

    public String generateJwt(User user) {
        long current = System.currentTimeMillis();

        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());
        claims.put("id", user.getId());
        claims.put("name", user.getName());

        return Jwts.builder()
                .claims()
                .add(claims)
                .issuer(user.getName())
                .issuedAt(new Date(current))
                .expiration(new Date(current + 60 * 60 * 1000))
                .and()
                .signWith(getSigningKey())
                .compact();
    }

    public boolean validateJwt(String jwt) {
        try {
            Claims claims = Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(jwt).getPayload();
            String name = claims.get("name", String.class);
            System.out.println(name);
            Date expirationDate = claims.getExpiration();
            if (expirationDate.before(new Date())) {
                throw new RuntimeException("JWT token is expired");
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
