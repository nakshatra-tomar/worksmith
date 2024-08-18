package com.worksmith.service;

import java.util.List;


import com.worksmith.model.Chat;
import com.worksmith.model.Project;
import com.worksmith.model.User;

public interface ProjectService {
    Project createProject(Project project, User user) throws Exception;


    List<Project> getProjectsByTeam(User user,String category,String tag) throws Exception;


    Project getProjectById(Long projectId) throws Exception;

    Void deleteProject(Long projectId,Long userId) throws Exception;

    Project updateProject(Project updatedProject, Long id) throws Exception;

    List<Project> searchProjects(String keyword, User user) throws Exception;

    void addUserToProject(Long projectId, Long userId) throws Exception;

    void removeUserFromProject(Long projectId, Long userId) throws Exception;

    Chat getChatByProjectId(Long projectId) throws Exception;



}
