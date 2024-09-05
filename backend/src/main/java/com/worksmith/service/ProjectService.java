package com.worksmith.service;

import java.util.List;


import com.worksmith.exception.ChatException;
import com.worksmith.exception.ProjectException;
import com.worksmith.exception.UserException;
import com.worksmith.model.Chat;
import com.worksmith.model.Project;
import com.worksmith.model.User;

public interface ProjectService {
    Project createProject(Project project, Long id) throws Exception;


    List<Project> getProjectsByTeam(User user,String category,String tag) throws ProjectException;


    Project getProjectById(Long projectId) throws ProjectException;

    String deleteProject(Long projectId,Long userId) throws UserException;

    Project updateProject(Project updatedProject, Long id) throws ProjectException;

    List<Project> searchProjects(String keyword, User user) throws ProjectException;

    void addUserToProject(Long projectId, Long userId) throws UserException, ProjectException;

    void removeUserFromProject(Long projectId, Long userId) throws UserException, ProjectException;

    Chat getChatByProjectId(Long projectId) throws ProjectException, ChatException;



}
