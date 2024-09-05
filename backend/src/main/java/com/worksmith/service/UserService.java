package com.worksmith.service;


import com.worksmith.exception.ProjectException;
import com.worksmith.exception.UserException;
import com.worksmith.model.User;

public interface UserService {

     User findUserProfileByJwt(String jwt) throws UserException, ProjectException;

     User findUserByEmail(String email) throws UserException;

     User findUserById(Long userId) throws UserException;

     User updateUsersProjectSize(User user,int number);


}
