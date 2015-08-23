# Pull base image
FROM ubuntu:14.04

# Install nodejs
RUN \
	apt-get update && \
	apt-get install -y curl && \
	curl --silent --location https://deb.nodesource.com/setup_0.12 | bash - && \
	apt-get install -y nodejs

# Install dependencies
RUN	\
	apt-get install -y build-essential python make git && \
	npm install -g gulp bower

# Define working directory
WORKDIR /var/www

# Define default command
CMD ["bash"]
