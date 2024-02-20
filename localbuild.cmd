docker build -t cvcontainer .
docker run -d --name cvapplication -p 8080:80 cvcontainer