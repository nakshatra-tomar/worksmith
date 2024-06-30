package com.worksmith.controller;
//sign up and sign in methods

import com.worksmith.model.User;
import com.worksmith.repository.UserRepository;
import com.worksmith.service.CustomUserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @Autowired
        private CustomUserDetailsImpl customerUserDetails;

        @PostMapping("/signup")
        public ResponseEntity<User> createUserHandler(@RequestBody User user) throws Exception {

                User isUserExist=userRepository.findByEmail(user.getEmail());

                if(isUserExist != null){
                        throw new Exception("Email already in use with another account");
                }

                User createdUser = new User();

                createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
                createdUser.setEmail(user.getEmail());
                createdUser.setFullName(user.getFullName());


                User savedUser = userRepository.save(createdUser);

                return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        }
}
