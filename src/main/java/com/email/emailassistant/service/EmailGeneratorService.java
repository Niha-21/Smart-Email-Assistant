package com.email.emailassistant.service;

import org.springframework.stereotype.Service;
import com.email.emailassistant.model.EmailRequest;


@Service
public interface EmailGeneratorService {

    public String generateEmailReply(EmailRequest emailRequest);

} 
