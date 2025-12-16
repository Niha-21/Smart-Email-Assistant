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

## 🔹 Screenshots

### Smart Email Assistant UI with Generated Email Reply
![Generated Reply](screenshots/generated-reply.png)

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

[Your Name]

---

## 🔹 Run Locally

Follow the steps below to run the application on your local machine.
### 1️⃣ Clone the Repository

git clone https://github.com/Niha-21/Smart-Email-Assistant.git

### 2️⃣ Backend Setup (Spring Boot)

Configure application.properties:

gemini.api.key=YOUR_API_KEY

gemini.api.url=YOUR_API_URL

mvn clean install

mvn spring-boot:run

Backend will start on:

http://localhost:8080

### 3️⃣ Frontend Setup (React)

cd ui

npm install

npm run dev

Frontend will start on:

http://localhost:5173

You can now generate AI-powered email replies using the Smart Email Assistant!

---

## 🔹 Future Enhancements

- JWT-based authentication and user management  
- Email history storage and retrieval  
- Dockerization and cloud deployment (AWS)  
- Rate limiting and retry handling for LLM calls  
- UI improvements (themes, accessibility)

---

## 🔹 Author

**Niha Shaikh**  
Software Engineer | Backend / Full-Stack Developer  

🔗 LinkedIn: https://www.linkedin.com/in/niha-shaikh-811685170/

💻 GitHub: https://github.com/Niha-21

