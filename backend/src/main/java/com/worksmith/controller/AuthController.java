package com.worksmith.controller;
//sign up and sign in methods

import com.worksmith.config.JwtProvider;
import com.worksmith.model.User;
import com.worksmith.repository.UserRepository;
import com.worksmith.request.LoginRequest;
import com.worksmith.response.AuthResponse;
import com.worksmith.service.CustomUserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
        public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {

                User isUserExist=userRepository.findByEmail(user.getEmail());

                if(isUserExist != null){
                        throw new Exception("Email already in use with another account");
                }

                User createdUser = new User();

                createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
                createdUser.setEmail(user.getEmail());
                createdUser.setFullName(user.getFullName());


                User savedUser = userRepository.save(createdUser);


                Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
                SecurityContextHolder.getContext().setAuthentication(authentication);

                String jwt = JwtProvider.generateToken(authentication);


                AuthResponse res = new AuthResponse();
                res.setMessage(("Signup successful"));
                res.setJwt(jwt);

                return new ResponseEntity<>(res, HttpStatus.CREATED);
        }

        @PostMapping("/signin")
        public ResponseEntity<AuthResponse> sighin(@RequestBody LoginRequest loginRequest){

                String username = loginRequest.getEmail();
                String password = loginRequest.getPassword();

                Authentication authentication = authenticate(username, password);
                SecurityContextHolder.getContext().setAuthentication(authentication);





                String jwt = JwtProvider.generateToken(authentication);


                AuthResponse res = new AuthResponse();
                res.setMessage(("Sign in successful"));
                res.setJwt(jwt);

                return new ResponseEntity<>(res, HttpStatus.CREATED);
        }

        private Authentication authenticate(String username, String password) {

                UserDetails userDetails = customerUserDetails.loadUserByUsername(username);

                if(userDetails == null){
                        throw new BadCredentialsException("Invalid username");
                }

                if(!passwordEncoder.matches(password,userDetails.getPassword())){
                        throw new BadCredentialsException("Incorrect password");


                }

                return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        }
}
