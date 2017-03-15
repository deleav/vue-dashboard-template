# iot-portal-vue

> An IoT portal with vue

## Build Setup
``` bash
docker build -t linkeriot/view .
```

``` config
# use extra hosts
portal:
  restart: always
  image: linkeriot/portal
  container_name: portal
  volumes:
    - ${PWD}/../iot-portal/app:/app
  environment:
    - LINKER_IOT_SERVER=http://104.199.252.165:3000
    - DB_SERVER=iot-mongodb
    - DB_PORT=27017
  links:
    - iot-mongodb:iot-mongodb
  ports:
    - "6688:6688"
  extra_hosts:
    - "iot-server:104.199.252.165"

# use local iot-server
portal:
  restart: always
  image: linkeriot/portal
  container_name: portal
  volumes:
    - ${PWD}/../iot-portal/app:/app
  environment:
    - LINKER_IOT_SERVER=http://iot-server:3000
    - DB_SERVER=iot-mongodb
    - DB_PORT=27017
  links:
    - iot-server:iot-server
    - iot-mongodb:iot-mongodb
  ports:
    - "6688:6688"
```
