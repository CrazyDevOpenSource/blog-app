#!/bin/bash

# Stop script on any error
set -e

echo "Starting cleanup of Kubernetes resources..."

# Step 1: Delete all deployments
echo "Deleting all deployments..."
kubectl delete deployments --all

# Step 2: Delete all services
echo "Deleting all services..."
kubectl delete svc --all

# Step 3: Delete all pods (optional, will happen automatically with deployments)
echo "Deleting all pods..."
kubectl delete pods --all

# Step 4: Delete all ConfigMaps (if any exist)
echo "Deleting all ConfigMaps..."
kubectl delete configmap --all

# Step 5: Delete all secrets (if any exist)
echo "Deleting all Secrets..."
kubectl delete secrets --all

# Step 6: Delete all persistent volume claims (PVCs) (optional)
echo "Deleting all Persistent Volume Claims..."
kubectl delete pvc --all

# Step 7: Verify cleanup
echo "Verifying cleanup..."
kubectl get all

echo "Cleanup complete!"
