# bib-pm-back-end

- ENV variables (See.env.example)

```
NODE_ENV=
JWT_SECRET_KEY=

DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=

DATABASE_TEST_HOST=
DATABASE_TEST_PORT=
DATABASE_TEST_NAME=
DATABASE_TEST_USERNAME=
DATABASE_TEST_PASSWORD=

AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_SES_REGION=
AWS_SES_FROM_EMAIL=
AWS_S3_BUCKET=
AWS_S3_REGION=
SERVER_PORT=


```

## Running from Docker images

Build and start the containers: 
```
docker-compose build
docker-compose up
```

Seed the Database from the app migrations:
```
docker exec -it bib-pm-backend npm run migrate
```
## executing commands in the containers 

The bib-pm-backend image doesn't have a shell enabled. You can run npm commands using: 
```
docker exec -it bib-pm-backend npm run [command]
```

You can get a shell in the MySQL container by running:

```
docker exec -it bib-db /bin/bash
```

It's possible to run a MySQL client image to connect to the MySQL server container:

```
docker run -it --network bib-pm-back-end_default --rm mysql mysql -hbib-db -uroot -ppassword
```# node-express-project-manager
