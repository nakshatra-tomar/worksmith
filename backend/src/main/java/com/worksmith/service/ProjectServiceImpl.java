package com.worksmith.service;

import com.worksmith.model.Chat;
import com.worksmith.model.Project;
import com.worksmith.model.User;

import java.util.List;

public class ProjectServiceImpl implements ProjectService{
    @Override
    public Project createProject(Project project, User user) throws Exception {
        return null;
    }

    @Override
    public List<Project> getProjectsByTeam(User user, String category, String tag) throws Exception {
        return List.of();
    }

    @Override
    public Project getProjectById(Long projectId) throws Exception {
        return null;
    }

    @Override
    public Void deleteProject(Long projectId, Long userId) throws Exception {
        return null;
    }

    @Override
    public Project updateProject(Project updatedProject, Long id) throws Exception {
        return null;
    }

    @Override
    public List<Project> searchProjects(String keyword, User user) throws Exception {
        return List.of();
    }

    @Override
    public void addUserToProject(Long projectId, Long userId) throws Exception {

    }

    @Override
    public void removeUserFromProject(Long projectId, Long userId) throws Exception {

    }

    @Override
    public Chat getChatByProjectId(Long projectId) throws Exception {
        return null;
    }
}
