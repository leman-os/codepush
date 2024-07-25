FROM node:20.15.1-alpine3.20

RUN mkdir /data/

WORKDIR /data/

COPY . /data/

RUN npm install

RUN npm run build

# CMD ["pm2-runtime", "/data/process.json"]
# workaround for issue https://github.com/Unitech/pm2/issues/4950
CMD ["npm run dev", "sh -c pm2 ps && pm2-runtime /data/process.json"]
