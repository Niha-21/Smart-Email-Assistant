package com.email.emailassistant.model;

import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
}
