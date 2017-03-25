FROM node:6.9.4
MAINTAINER linkeriot

WORKDIR /app

EXPOSE 8080

CMD ["npm", "install"]