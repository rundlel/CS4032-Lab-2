# CS4032-Lab-2

Multithreaded server.

#INSTRUCTIONS

##Step 1
run `chmod +x compile.sh` and `chmod +x start.sh` in order to make these shell files executable

##Step 2
install sudo with the command `apt-get install sudo`

##Step 3.1
execute the compile shell file with the command `sudo ./compile.sh`
##Step 3.2
  If you are behind a proxy, you may get an error at this stage. Set the proxy with the command `npm config set proxy [proxy]` and `npm config set https-proxy [proxy]` and re run step 3.1
  
##Step 4 
execute the start shell file with the command `sudo ./start.sh PORT` where PORT is the port number you want the server to listen on
