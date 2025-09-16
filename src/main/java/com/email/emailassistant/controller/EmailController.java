package com.email.emailassistant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.email.emailassistant.model.EmailRequest;
import com.email.emailassistant.service.EmailGeneratorService;

@RestController
@RequestMapping("/api/email")
public class EmailController {
    
    @Autowired
    private EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {

        String response = emailGeneratorService.generateEmailReply(emailRequest);

        return ResponseEntity.ok(response);
    }

}
