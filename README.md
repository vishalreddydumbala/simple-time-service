# ⏱️ SimpleTimeService

## 📌 Overview

SimpleTimeService is a lightweight microservice built using Node.js that returns the current timestamp and the IP address of the client making the request.

This project demonstrates:

* Building a simple REST API
* Containerizing applications using Docker
* Running containers securely as a non-root user
* Using Docker Compose for easy deployment

---

## 🚀 Features

* Returns current timestamp in ISO format
* Detects client IP address
* Fully containerized using Docker
* Runs as a non-root user (security best practice)
* Easy deployment using Docker Compose

---

## 🧰 Prerequisites

Make sure you have the following installed:

* **Docker**

  * Install: https://docs.docker.com/get-docker/

* **Docker Compose** (comes with Docker Desktop)

  * Install: https://docs.docker.com/compose/install/

* **Git**

  * Install: https://git-scm.com/downloads

---

## 📥 Clone the Repository

```bash
git clone https://github.com/vishalreddydumbala/simple-time-service
cd simple-time-service
```

---

## ⚙️ Running the Application (Recommended)

### Using Docker Compose

```bash
docker compose up -d
```

✔ This will:

* Pull the Docker image from DockerHub (if not available locally)
* Start the container
* Run the service on port **3000**

---

## 🌐 Access the Service

Open your browser:

```
http://localhost:3000/
```

### Example Response

```json
{
  "timestamp": "2026-04-09T12:00:00.000Z",
  "ip": "192.168.1.1"
}
```

---

## 🐳 Running Without Docker Compose (Optional)

### Pull Image

```bash
docker pull vishalwork/simple-time-service:latest
```

### Run Container

```bash
docker run -p 3000:3000 <your-username>/simple-time-service
```

---

## 🔐 Security

* The container runs as a **non-root user**
* This reduces security risks and follows container best practices

---

## 📁 Project Structure

```
.
├── index.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```


---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/vishalreddydumbala

---

## 📄 License

This project is open-source and available under the MIT License.
