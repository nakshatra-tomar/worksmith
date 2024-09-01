package com.worksmith.service;

import com.worksmith.model.Chat;
import com.worksmith.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepository chatRepository;


    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}