# My Portifolio

- This is my Portifolio, and I build it with Next.js for the Frontend using React as a bundler, and Express and Node.js with TypeScript in the backend using bun. 

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Bun](https://img.shields.io/badge/Bun-1.0-000000?logo=bun)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=yellow)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0-339933?logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-5.0-47A248?logo=mongodb)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visualstudiocode)

## My name is Renato de Bakker

![My Project Screenshot](https://github.com/user-attachments/assets/434fa575-8836-4b19-aa4f-be34bde6ee44)





<!-- https://img.shields.io/badge/{LEFT_TEXT}-{RIGHT_TEXT}-{COLOR}?logo={LOGO_NAME}


JavaScript = Left text

ES6+ = Right text

F7DF1E = Yellow color (JavaScript's brand color)

logo=javascript = JavaScript logo

logoColor=black = Logo color -->

# 🚀 Renato Portfolio

A modern, full‑stack portfolio built with **Next.js (App Router)**, showcasing projects, tech stack, and a fully functional **Contact system** powered by **MongoDB** and **Zapier automation**.

This project was designed not only as a personal website, but as a **production‑ready application**, demonstrating real‑world patterns such as API routes, database persistence, deployment, and workflow automation.

---

## 🌐 Live Demo

🔗 **Live Website:** [https://renato-portifolio.onrender.com](https://renato-portifolio.onrender.com)

---

## ✨ Key Features

### 🖥️ Frontend

* Built with **Next.js 15 (App Router)**
* Fully responsive UI
* Modern component architecture
* Type‑safe forms with validation
* Optimized for performance and SEO

### 📩 Contact System (Full Stack)

* Custom contact form
* Server‑side API endpoint (`/api/contact`)
* Data persistence using **MongoDB Atlas**
* Robust validation and error handling

### ⚙️ Automation & Integrations

* **Zapier Webhook integration**
* Automatically triggers workflows when a new message is received
* Enables email notifications and future AI‑powered replies
* Designed for multilingual and scalable automation use cases

### ☁️ Deployment

* Deployed on **Render** as a **Node Web Service**
* Supports server‑side rendering and API routes
* Environment‑based configuration for secure credentials

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 15** (App Router)
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **React Hook Form**
* **Zod** (schema validation)

### Backend

* **Next.js API Routes**
* **MongoDB Atlas**
* **MongoDB Node Driver**
* **Axios**

### Automation & DevOps

* **Zapier (Webhooks)** – automation & notifications
* **Render** – deployment & hosting
* **pnpm** – package management

---

## 🔁 Automation Workflow (Zapier)

When a user submits the contact form:

1. The frontend sends data to `/api/contact`
2. The API:

   * Validates the payload
   * Stores the message in MongoDB
   * Sends the payload to Zapier via webhook
3. Zapier triggers automation such as:

   * Sending email notifications
   * Routing messages
   * (Future) AI‑generated replies in multiple languages

This architecture allows **easy expansion** into AI‑assisted customer communication, multilingual responses, and CRM integrations.

---

## 🧠 Why Automation Matters

Automation is becoming a core skill in modern development. This project demonstrates:

* Event‑driven architecture
* Third‑party integrations
* Scalable communication workflows
* Foundation for AI‑powered features

These patterns are highly relevant for **modern SaaS**, **startups**, and **enterprise applications**.

---

## 🔐 Environment Variables

The following environment variables are required:

```env
MONGODB_URI=your_mongodb_connection_string
ZAPIER_WEBHOOK_URL=your_zapier_webhook_url
```

---

## 🧪 Local Development

```bash
pnpm install
pnpm dev
```

The app will be available at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
app/
├─ api/
│  └─ contact/
│     └─ route.ts
├─ contact/
│  └─ page.tsx
├─ projects/
├─ tech-stack/
└─ layout.tsx
```

---

## 🚧 Future Improvements

* 🤖 AI‑powered multilingual auto‑replies
* 📊 Admin dashboard for messages
* 📨 Advanced email templating
* 🔐 Authentication for admin access

---

## 👨‍💻 Author

**Renato**
Full‑Stack Developer
Passionate about modern web technologies, automation, and scalable systems.

---

⭐ If you like this project, feel free to star the repository!
