package com.worksmith.service;

import com.worksmith.config.JwtProvider;
import com.worksmith.model.User;
import com.worksmith.repository.UserRepository;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserProfileByJwt(String jwt) throws Exception{
        String email = JwtProvider.getEmailFromToken(jwt);

        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);

        if (user != null) {

            return user;
        }

        throw new Exception("No user exists with username " + email);
    }

    public User findUserById(Long userId) throws Exception {
        Optional<User> opt = userRepository.findById(userId);

        if (opt.isEmpty()) {
            throw new Exception("No user found with ID: " + userId);
        }
        return opt.get();
    }

    @Override
    public User updateUsersProjectSize(User user, int number) {
        user.setProjectSize(user.getProjectSize()+number);
        if(user.getProjectSize()==-1){
            return user;
        }
        return userRepository.save(user);
    }
}
