#!/bin/bash

# Step 1: Build the Docker image
echo "Building docker image..."
docker build -t comments-service:latest .

# Step 2: Apply the Kubernetes Deployment and Service
echo "Apply kubernetes deployment..."
kubectl apply -f ./devOps/comments-service-deployment.yaml
kubectl apply -f ./devOps/comments-service-service.yaml

# Step 3: Wait for the service to get an external IP
echo "Waiting for the LoadBalancer to get an external IP..."
while true; do
  EXTERNAL_IP=$(kubectl get svc comments-service -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null)
  if [ -z "$EXTERNAL_IP" ]; then
    # If LoadBalancer IP isn't assigned, fallback to NodePort
    NODE_PORT=$(kubectl get svc comments-service -o jsonpath='{.spec.ports[0].nodePort}')
    if [ -n "$NODE_PORT" ]; then
      echo "LoadBalancer IP unavailable. Access via localhost on NodePort: $NODE_PORT"
      echo "URL: http://localhost"
      exit 0
    else
      echo "Still waiting for external IP or NodePort..."
      sleep 5
    fi
  else
    echo "Client app is available at: http://$EXTERNAL_IP"
    exit 0
  fi
done

echo "Client app is available at: http://$EXTERNAL_IP"