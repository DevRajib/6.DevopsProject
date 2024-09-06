# DevopsProject

# 3-Tier Kubernetes CI/CD with GitHub Actions and ArgoCD (React, DRF, Database on EKS)

This guide provides a step-by-step setup for a 3-tier Kubernetes architecture (React frontend, DRF backend, and a Database) using GitHub Actions for CI and ArgoCD for CD on Amazon EKS.

## Directory Structure

```

project-root/
│
├── frontend/                  # React application
│   ├── Dockerfile
│   ├── src/
│   └── ...
├── backend/                   # Django Rest Framework (DRF) application
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── ...
├── manifests/                 # Kubernetes manifests
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── database-deployment.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   └── ...
├── .github/                   # GitHub Actions workflows
│   └── workflows/
│       ├── frontend.yml
│       ├── backend.yml
│       └── deploy.yml
└── argocd-apps/               # ArgoCD application manifests
    ├── frontend-app.yaml
    ├── backend-app.yaml
    └── database-app.yaml


```



# Step-by-Step Instructions

### Prerequisites

 1.AWS CLI installed and configured with access to your EKS cluster.

 2.kubectl installed and configured.

 3.Docker Hub account.

 4.GitHub Actions configured for your repository.

 5.ArgoCD installed on your EKS cluster.

 6.Traefik installed as an ingress controller with SSL/HTTPS via ACME TLS challenge.
 

## 1. Dockerize Your Applications
### Frontend (React): `frontend/Dockerfile`


```
# Use an official Node.js image for the build process
FROM node:14 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Use an Nginx image to serve the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

```

Backend (DRF): `backend/Dockerfile`


```
# Use official Python image as a base
FROM python:3.8-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]


```

## 2. Kubernetes Manifests
Create Kubernetes manifests for deployments, services, and ingress.

### frontend-deployment.yaml
### backend-deployment.yaml
### database-deployment.yaml
### ingress.yaml (with Traefik for SSL)



Example of `frontend-deployment.yaml`:



```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: <dockerhub-username>/frontend:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: frontend
spec:
  type: ClusterIP
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 80


```

-Use similar structure for backend and database deployments.
-Configure ingress.yaml to route traffic via Traefik.
### 3. CI Pipeline with GitHub Actions
Set up GitHub Actions workflows to build and push Docker images to Docker Hub.


```
name: Frontend CI

on:
  push:
    paths:
      - 'frontend/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
    - name: Log in to Docker Hub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    - name: Build and Push Docker Image
      run: |
        docker build -t ${{ secrets.DOCKER_USERNAME }}/frontend:latest ./frontend
        docker push ${{ secrets.DOCKER_USERNAME }}/frontend:latest

```

-Create similar workflows for backend.yml and database.yml.



### 4. ArgoCD Application Manifests
In the argocd-apps/ directory, create ArgoCD applications for each component.

Frontend ArgoCD Application: `argocd-apps/frontend-app.yaml`



```
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: frontend
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/<your-repo>'
    targetRevision: HEAD
    path: manifests/frontend-deployment.yaml
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true


```

-Repeat for backend and database applications.

## 5. Deploy ArgoCD to EKS
### Install ArgoCD in your EKS cluster:

```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

```
2.Access ArgoCD UI and configure the applications.


### 6. Continuous Deployment with ArgoCD
After setting up ArgoCD, every time a change is pushed to your repository and Docker images are updated, ArgoCD will automatically sync your Kubernetes manifests with the new images.

### 7. Configure Traefik for HTTPS
Ensure your ingress.yaml includes annotations for Traefik's ACME TLS challenge. Example:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: frontend-ingress
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: websecure
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  rules:
  - host: decorationbd.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend
            port:
              number: 80
  tls:
  - hosts:
    - decorationbd.com
    secretName: tls-secret

```




## Conclusion
1.Dockerize your applications.
2.Create Kubernetes manifests.
3.Set up GitHub Actions for CI.
4.Set up ArgoCD for CD.
5.Install and configure ArgoCD in your EKS cluster.
6.Configure Traefik for SSL.


### This setup allows for automatic deployment of changes via ArgoCD, and the CI pipeline will build and push Docker images to Docker Hub.
























