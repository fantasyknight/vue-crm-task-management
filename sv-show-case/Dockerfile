# Filename: Dockerfile
FROM node:14-alpine
RUN mkdir -p /usr/src/bib-playground
RUN mkdir -p /usr/src/bib-shared
COPY ./bib-shared/ /usr/src/bib-shared
WORKDIR /usr/src/bib-playground
COPY ./bib-playground /usr/src/bib-playground
RUN npm install
RUN npm run build
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
CMD npm start