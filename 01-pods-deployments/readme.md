# Pods

kubectl apply -f 01-pods/pod.yaml 
kubectl get pods
kubectl get po
kubectl exec -it nginx -c nginx -- /bin/sh
kubectl port-forward nginx 8080:80
kubectl logs -f nginx

kubectl top pods
kubectl top nodes

# Deployments

kubectl explain deploy.spec.template.spec == kubectl explain pod.spec

kubectl edit deploy nginx
kubectl apply -f 01-pods-deployments/deploy.yaml
kubectl get deploy

