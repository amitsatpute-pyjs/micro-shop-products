#!/bin/bash
kubectl config use-context k3d-micro-shop-local 
docker build -t products:latest -f docker/micro-shop-products.Dockerfile . --no-cache
k3d image import --cluster micro-shop-local products:latest
kubectl rollout restart deployment products-deployment -n default
