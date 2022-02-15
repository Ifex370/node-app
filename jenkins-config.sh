app_tag=`git ls-remote https://github.com/ifex370/node-app HEAD | awk '{print $1}'`

docker_app="08183530115/nodejenkins:$app_tag"
docker build -t $docker_app .

docker login -u 08183530115 -p  

docker push $docker_app
