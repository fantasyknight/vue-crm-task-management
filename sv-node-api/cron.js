require("dotenv").config();
const mysql = require('mysql');
const winston = require('winston');
const Bree = require('bree');
const Cabin = require('cabin');

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const initialize = async () => {
  winston.info('Initializing DB connection for cron job');

  const error = await connection.connect();
  
  if (error) {
    winston.error('DB connection failed');
    return;
  }

  winston.info('DB connection success');

  const bree = new Bree(
    {
      logger: new Cabin(),
      jobs: [
        {
          name: 'run',
          interval: '1m',
        },
      ],
    }
  );

  bree.start();
};

initialize();
