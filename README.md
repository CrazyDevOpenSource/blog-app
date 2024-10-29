# **Blog App Monorepo 📝**  
🚀 A full-stack blog application using a **monorepo structure** with React (client) and Node.js microservices for managing posts and comments. 

---

## 📂 **Project Structure**
```
blog-app
├── client                  # React frontend
|   ├── deploy.sh           # React frontend deploy script [Individual]
├── backend                 # Node.js backend services
│   ├── posts-service       # Service for managing posts
|   |   ├── deploy.sh       # posts-service deploy script [Individual]
│   ├── comments-service    # Service for managing comments
|   |   ├── deploy.sh       # comments-service deploy script [Individual]
└── deploy.sh               # Master deploy script [Deploy all projects]
```

---

## 🌟 **Features**

- **Client (React App)**:  
  A beautiful, responsive front-end to display blog posts and comments.

- **Posts-Service**:  
  Microservice to manage blog posts (CRUD operations).

- **Comments-Service**:  
  Microservice to handle comments related to posts.

- **Dockerized Deployment**:  
  Easily deployable using **Docker** and **Kubernetes**.

---

## 🛠️ **Pre-requisites**

Make sure you have the following installed:

**1. Docker Desktop** (with Kubernetes enabled) 🐳  
**2. kubectl** for managing Kubernetes clusters  
**3. Node.js** and **npm**  
**4. React.js**  
**5. Git**

---

## 🚀 **How to Run Locally**  
**1. Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   npm run install
   ```
**2. Create .env file**: At path ```blog-app/client/```
   ```bash
    REACT_APP_POSTS_SERVICE_ENDPOINT=http://localhost:4000/posts
    REACT_APP_COMMENTS_SERVICE_ENDPOINT=http://localhost:4001/posts
   ```
**3. Run each service**:
   ```bash
    # Client (React)
    cd client
    
    # Posts Service
    cd ../backend/posts-service
    npm run dev

    # Comments Service
    cd ../backend/comments-service
    npm run dev
   ```

---

## 🐳 **Dockerizing the Application**
#### Approach 1:
**1. Build Docker images for individual services**:
   ```bash
    docker build -t blog-client:latest ./client
    docker build -t posts-service:latest ./backend/posts-service
    docker build -t comments-service:latest ./backend/comments-service
   ```
**2. Deploy services to Kubernetes using the following steps**:
   ```bash
    cd blog-app

    # Deploy client
    kubectl apply -f client/devOps/client-deployment.yaml
    kubectl apply -f client/devOps/client-service.yaml

    # Deploy posts-service
    kubectl apply -f backend/posts-service/devOps/posts-service-deployment.yaml
    kubectl apply -f backend/posts-service/devOps/posts-service-service.yaml

    # Deploy comments-service
    kubectl apply -f backend/comments-service/devOps/comments-service-deployment.yaml
    kubectl apply -f backend/comments-service/devOps/comments-service-service.yaml
   ```
#### Approach 2:
**1. Build & Deploy individual services with dedicated ```deploy.sh```**:
   ```bash
    cd client
    chmod +x deploy.sh
    ./deploy.sh

    cd ../backend/posts-service
    chmod +x deploy.sh
    ./deploy.sh

    cd ../comments-service
    chmod +x deploy.sh
    ./deploy.sh
   ```

#### Approach 3:
**1. Build & Deploy using master deploy.sh**: ```At path blog-app/```
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

---

## 🧹 **Cleaning Up Resources**:
To stop all deployments and services, run the ```cleanup.sh``` script:

---

## 🌱 **Future Improvements**
 - Move to runtime environment injection for more flexible deployments.
 - Add CI/CD pipelines using GitHub Actions.
 - Use Helm charts to manage Kubernetes manifests.
 - Implement service mesh (e.g., Istio) for better traffic management.

 ---

## 🤝 **Contributing**
Feel free to open issues or submit PRs to enhance this project. Contributions are always welcome! 🥳

---

## 📄 **License**
This project is licensed under the MIT License.

---

## 📧 **Contact**
If you have any questions or suggestions, feel free to contact:
```
Saurav Pahuja
📧 Email: sauravpahuja1995@gmail.com
🔗 Linkedin: https://www.linkedin.com/in/saurav-pahuja/
🔗 GitHub: https://github.com/SauravPahuja1212
```

🎉 Thanks for using Blog App Monorepo!
Happy coding! 🚀😊
