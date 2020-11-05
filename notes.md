Start by creating a simple express app that sends "hello world" to the  server.

Dockerize the simple express applications and go through a basic Dockerfile
FROM
WORKDIR
COPY
RUN
COPY
EXPOSE
CMD

explains cache on different stage of the build, explain docker command like
build
run

`docker build -t <your username>/node-web-app .`
`docker run --name containerName -d imageName`

now we should be able to see that our server is successfully running on port 8090 when we start our docker container

try to change something an noticed that the changes were not reflected.
explains that when we run docker run, docker will take the snapshot of the filesystem at the current point and the changes later on are not reflected unless we rebuilt the appliation

options 1:
`docker run -it -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app 0d06a8ff69b3`
This is a little troublesome to write.

options 2:
can be configured easily on docker compose file

introduce docker compose and explains the benefit of using one.
1. able to run multiple containers with just one command
2. connect the containers (can be done manually but very hectic process)

show example of running multiple container at once
install jest for test
write a unit test
create a docker container that run the unit test

using jest --watchAll to run the test as we make changes to our code
