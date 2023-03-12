#!/bin/bash
kubectl config use-context k3d-micro-shop-local 
docker build -t micro-shop-products:latest -f docker/micro-shop-products.Dockerfile . --no-cache
k3d image import --cluster micro-shop-local micro-shop-products:latest
kubectl rollout restart deployment products-deployment -n default