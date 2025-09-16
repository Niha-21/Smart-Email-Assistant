package com.email.emailassistant.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.email.emailassistant.model.EmailRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


@Service
public class EmailGeneratorServiceImpl implements EmailGeneratorService {
    
    private final WebClient webClient;

    @Value("${gemini.api.key}")
    private String GEMINI_KEY;

    @Value("${gemini.api.url}")
    private String GEMINI_URL;


    EmailGeneratorServiceImpl(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }
    

    public String generateEmailReply(EmailRequest emailRequest) {

        //generate prompt
        String prompt = buildPrompt(emailRequest.getEmailContent(), emailRequest.getTone());

        //form gemini request structure
        Map<String, Object> requestBody = Map.of(
            "contents", new Object[]{
                Map.of(
                    "parts", Map.of( 
                        "text", prompt
                    )
                )
            }
        );
        
        //call gemini api
        String response = webClient.post()
                        .uri(GEMINI_URL + GEMINI_KEY)
                        .header("Content-Type", "application/json")
                        .bodyValue(requestBody)
                        .retrieve()
                        .bodyToMono(String.class)
                        .block();

        //extract result and return
        return extractResponseContent(response);
    }


    private String buildPrompt(String emailContent, String tone) {

        StringBuilder prompt = new StringBuilder();
        prompt.append("Generate a reply to the email provided. Please don't generate a subject line.");        

        if(tone != null && !tone.isEmpty()) {
            prompt.append("Please use a " + tone + " tone.");
        }

        prompt.append("Original Email : " + emailContent);

        return prompt.toString();
    }


    private String extractResponseContent(String response) {
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(response);
            
            return jsonNode.path("candidates")
                .get(0).path("content")
                .path("parts").get(0)
                .path("text").asText();

        } catch(Exception e) {
            return "Error Extracting Response: " + e;
        }
    }

}
