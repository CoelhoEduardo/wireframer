# wireframer

to run:
docker build -t wireframe .
docker run --env API_KEY={YOUR KEY HERE} -p 3000:3000 wireframe

to stop:
docker ps
docker stop {CONTAINER ID}
