package com.worksmith.service;


import com.worksmith.exception.IssueException;
import com.worksmith.exception.ProjectException;
import com.worksmith.exception.UserException;
import com.worksmith.model.Issue;
import com.worksmith.model.User;
import com.worksmith.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public class IssueServiceImpl implements IssueService {
    @Override
    public Optional<Issue> getIssueById(Long issueId) throws IssueException {
        return Optional.empty();
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws ProjectException {
        return List.of();
    }

    @Override
    public Issue createIssue(IssueRequest issue, Long userid) throws UserException, IssueException, ProjectException {
        return null;
    }

    @Override
    public Optional<Issue> updateIssue(Long issueid, IssueRequest updatedIssue, Long userid) throws IssueException, UserException, ProjectException {
        return Optional.empty();
    }

    @Override
    public String deleteIssue(Long issueId, Long userid) throws UserException, IssueException {
        return "";
    }

    @Override
    public List<Issue> getIssuesByAssigneeId(Long assigneeId) throws IssueException {
        return List.of();
    }

    @Override
    public List<Issue> searchIssues(String title, String status, String priority, Long assigneeId) throws IssueException {
        return List.of();
    }

    @Override
    public List<User> getAssigneeForIssue(Long issueId) throws IssueException {
        return List.of();
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws UserException, IssueException {
        return null;
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws IssueException {
        return null;
    }
}
