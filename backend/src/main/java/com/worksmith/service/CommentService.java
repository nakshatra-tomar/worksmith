package com.worksmith.service;

import com.worksmith.exception.IssueException;
import com.worksmith.exception.UserException;
import com.worksmith.model.Comment;

import java.util.List;

public interface CommentService {

    Comment createComment(Long issueId, Long userId, String comment) throws UserException, IssueException;

    void  deleteComment(Long commentId, Long userId) throws UserException, IssueException;

    List<Comment> findCommentByIssueId(Long issueId);
}
