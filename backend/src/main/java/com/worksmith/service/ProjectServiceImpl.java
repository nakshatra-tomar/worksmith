package com.worksmith.service;

import com.worksmith.exception.ChatException;
import com.worksmith.exception.ProjectException;
import com.worksmith.exception.UserException;
import com.worksmith.model.Chat;
import com.worksmith.model.Project;
import com.worksmith.model.User;
import com.worksmith.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class ProjectServiceImpl implements ProjectService{

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserService userService;


    @Autowired
    private ChatService chatService;






    @Override
    public Project createProject(Project project,Long id) throws UserException {
        User user = userService.findUserById(id);
        Project createdProject=new Project();

        createdProject.setOwner(user);
        createdProject.setTags(project.getTags());
        createdProject.setName(project.getName());
        createdProject.setCategory(project.getCategory());
        createdProject.setDescription(project.getDescription());
        createdProject.getTeam().add(user);

        System.out.println(createdProject);
        Project savedProject=projectRepository.save(project);

        savedProject.getTeam().add(user);

        Chat chat = new Chat();
        chat.setProject(savedProject);
        Chat projectChat = chatService.createChat(chat);
        savedProject.setChat(projectChat);
        return savedProject;
    }

    @Override
    public List<Project> getProjectsByTeam(User user,String category,String tag) throws ProjectException {
        List<Project> projects= projectRepository.findByTeamContainingOrOwner(user,user);

        if (category != null) {
            projects = projects.stream()
                    .filter(project -> project.getCategory().equals(category))
                    .collect(Collectors.toList());
        }

        if (tag != null) {
            projects = projects.stream()
                    .filter(project -> project.getTags().contains(tag))
                    .collect(Collectors.toList());
        }

        return projects; //returns list of projects
    }

    @Override
    public Project getProjectById(Long projectId) throws ProjectException {
        Optional<Project> project = projectRepository.findById(projectId);
        if(project.isPresent()) {
            return project.get();
        }
        throw new ProjectException("No project exists with the id: "+projectId);
    }

    @Override
    public String deleteProject(Long projectId,Long id) throws UserException {
        User user = userService.findUserById(id);
        System.out.println("User ____>"+user);
        if(user != null) {
            projectRepository.deleteById(projectId);
            return "The project has been deleted";
        }
        throw new UserException("User does not exists");
    }
    

    @Override
    public Project updateProject(Project updatedProject, Long id) throws ProjectException {
        Project project = getProjectById(id);

        if (project != null) {
            // Update the existing project with the fields from updatedProject
            if (updatedProject.getName() != null) {
                project.setName(updatedProject.getName());
            }

            if (updatedProject.getDescription() != null) {
                project.setDescription(updatedProject.getDescription());
            }

            if (updatedProject.getTags() != null) {
                project.setTags(updatedProject.getTags());
            }

            // Save the updated project once
            return projectRepository.save(project);
        }
        throw new ProjectException("The project does not exist");
    }

    @Override
    public List<Project> searchProjects(String keyword, User user) throws ProjectException {
            String partialName = "%" + keyword + "%";


//			projectRepository.findByPartialNameAndTeamIn(partialName, user);
            List<Project> list = projectRepository.findByNameContainingAndTeamContains(keyword,user);
            if(list!=null) {
                return list;
            }
            throw new ProjectException("No Projects available");
    }

    @Override
    public void addUserToProject(Long projectId, Long userId) throws UserException, ProjectException {

            Project project = projectRepository.findById(projectId).orElseThrow(() -> new ProjectException("Project not found"));
            User user = userService.findUserById(userId);

            if (!project.getTeam().contains(user)) {
                project.getChat().getUsers().add(user);
                project.getTeam().add(user);
                projectRepository.save(project);
            }


    }

    @Override
    public void removeUserFromProject(Long projectId, Long userId) throws UserException, ProjectException {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ProjectException("Project not found"));
        User user = userService.findUserById(userId);

        if (project.getTeam().contains(user)) {
            project.getTeam().remove(user);
            project.getChat().getUsers().remove(user);
        }
    }

    @Override
    public Chat getChatByProjectId(Long projectId) throws ProjectException, ChatException {
        Project project = projectRepository.findById(projectId).orElseThrow(()-> new ProjectException("Project not found"));
        if( project != null ) return project.getChat() ;


        throw new ChatException("No chats available");

    }

    public List<User> getUsersByProjectId(Long projectId) throws ProjectException {
        Project project = projectRepository.findById(projectId).orElse(null);
        if( project != null) return project.getChat().getUsers();

        throw new ProjectException("No project found with the id: "+projectId);
    }

}
