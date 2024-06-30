package com.worksmith.request;


import lombok.Data;

@Data //makes getter setter methods available
public class LoginRequest {

    private String email;
    private String password;
}
