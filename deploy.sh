#!/bin/bash

# Function to execute each service's deploy.sh
deploy_service() {
  local service_path=$1
  echo "Deploying service in: $service_path"

  # Navigate into the service directory
  cd $service_path || { echo "Failed to enter $service_path"; exit 1; }

  # Run the deploy.sh script in that directory
  if [ -f ./deploy.sh ]; then
    ./deploy.sh
    if [ $? -eq 0 ]; then
      echo "Successfully deployed: $service_path"
    else
      echo "Deployment failed: $service_path"
      exit 1
    fi
  else
    echo "deploy.sh not found in: $service_path"
  fi

  # Navigate back to the root directory
  cd - > /dev/null
}

# Deploy each service
deploy_service "./client"
deploy_service "./backend/posts-service"
deploy_service "./backend/comments-service"

echo "All services deployed successfully!"