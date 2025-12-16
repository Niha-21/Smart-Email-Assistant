# Smart Email Assistant ✉️🤖

AI-powered email reply generator built using **Spring Boot**, **Google Gemini API**, and **React**, designed to generate context-aware email responses with selectable tone.

---

## 🔹 Overview

Smart Email Assistant is a full-stack application that helps users generate professional, casual, or friendly email replies by providing the email context and desired tone.

The backend integrates with **Google Gemini LLM** to generate responses, while the frontend offers a clean **React-based UI** for user interaction.

---

## 🔹 Tech Stack

### Backend
- Java 17  
- Spring Boot  
- Spring Web / REST APIs  
- WebClient  
- Google Gemini API  
- Maven  

### Frontend
- React (Vite)  
- JavaScript (ES6+)  
- HTML5, CSS (Inline styling)  
- Fetch API  

### Other
- Git & GitHub  
- RESTful API design  
- CORS configuration  

---

## 🔹 Features

- Generate AI-powered email replies
- Select reply tone (Professional, Casual, Friendly, Formal)
- Clean and responsive UI
- Clear input functionality
- Backend–frontend integration via REST APIs
- Configurable API key support
- Error handling & loading states  
- Backend-driven prompt engineering  

---

## 🔹 API Example

### Generate Email Reply

**Request**

curl -X POST http://localhost:8080/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{
    "emailContent": "Hi, congratulations on the successful completion of the project. Let us know if you would like to discuss next steps.",
    "tone": "professional"
  }'

**Response**
Hi,

Thank you for your message. I appreciate the update on the project’s successful completion. I would be happy to discuss the next steps at your convenience.

Best regards,
<your name>

---

