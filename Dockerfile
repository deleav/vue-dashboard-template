FROM node:5.9
MAINTAINER linkeriot

WORKDIR /app

EXPOSE 8080

CMD ["npm", "install"]