# GitHub Copilot Instructions for Profile Page

## 🎯 Objective
Create a modern, responsive personal profile webpage using **ReactJS**, styled with **pastel colors** and clean UI principles. This page will showcase information from Trần Ngọc Chương’s CV.

## 🖼️ Design Style
- Use **modern, clean design**
- Primary color scheme: **pastel colors** (light blue, soft pink, mint green, lavender, pastel yellow)
- Use **lucide-react** icons where suitable (Mail, Github, Linkedin, MapPin, Code, Database, Server, Award, etc.)
- Use **Tailwind CSS** for styling

## 🧱 Layout Structure

### 1. Header
- Name: `Trần Ngọc Chương`
- Title: `Backend Web Developer`
- Location: `Long Thành Mỹ, Thủ Đức, HCM, Vietnam`
- Contact:
  - Email: `tranngocchuongkt@gmail.com`
  - Phone: `0397812503`
  - LinkedIn: `https://linkedin.com/in/tranngocchuong`
  - GitHub: `https://github.com/chuong2610`

### 2. About Me
Short paragraph:
> I’m a final-year Software Engineering student at FPT University with a solid foundation in Java, C#, Spring Boot, and .NET. I have hands-on experience in fullstack development and software architecture, and I’m passionate about backend development and continuous learning.

### 3. Skills (Grid/List)
Group by category:

- **Languages:** Java, C#, JavaScript, HTML, CSS
- **Frameworks:** Spring Boot, .NET Core
- **Databases:** MySQL, SQL Server, Redis
- **Messaging & APIs:** Kafka, RabbitMQ, RESTful API, Postman, Swagger
- **Tools:** Docker, Git, Maven, WebSocket, Nginx, GitHub Actions, VPS
- **IDEs:** IntelliJ, VS, VS Code

### 4. Projects (Card UI with pastel background)
Each card includes:
- **Project Name**
- **Timeframe**
- **Tech Stack**
- **Team size**
- **Role**
- **Key features (bullet points)**

#### Example:
**🎬 Online Movie Booking System**  
*Dec 2023 - Apr 2024*  
**Tech stack:** Java, Spring Boot, MySQL, RESTful API, Redis, Kafka, WebSocket  
**Role:** Fullstack Developer (Solo project)

- Developed RESTful APIs for registration, movie listings, booking
- Handled real-time seat reservations with Kafka + WebSocket
- Dockerized app for deployment

Include other projects:
- Online Hotel Booking
- School Health Management (with live demo link: `https://school-health-nine.vercel.app`)

### 5. Education (Timeline or simple section)
- **FPT University** (2021 - 2026) — Bachelor of Software Development
- **Cybersoft Academy** — Java & .NET Web Developer Bootcamp

### 6. Languages
- English: Intermediate (can read technical documents)
- Japanese: Basic (JLPT N4)

### 7. Footer
- GitHub link
- LinkedIn link
- Designed by Trần Ngọc Chương

## 🔧 Technical Requirements
- Use **ReactJS functional components**
- Use **Tailwind CSS** for layout and theming
- Use **lucide-react** icons where appropriate
- Optimize for both desktop and mobile view

## ✅ Optional Enhancements
- Add theme toggle (light/pastel mode)
- Add animations with Framer Motion
- Add interactive contact form (non-functional mock)