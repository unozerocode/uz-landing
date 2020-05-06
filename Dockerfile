# base image
FROM node:11

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy all frontend stuff to new "app" folder
COPY . /app/

RUN npm install

CMD ["./app/run.sh"]

EXPOSE 9000