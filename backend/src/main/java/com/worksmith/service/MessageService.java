package com.worksmith.service;

import com.worksmith.exception.ChatException;
import com.worksmith.exception.ProjectException;
import com.worksmith.exception.UserException;
import com.worksmith.model.Message;

import java.util.List;

public interface MessageService {

    Message sendMessage(Long senderId, Long chatId, String content) throws UserException, ChatException, ProjectException;

    List<Message> getMessagesByProjectId(Long projectId) throws ProjectException, ChatException;
}


