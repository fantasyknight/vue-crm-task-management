const Sequelize = require("sequelize");
require("dotenv").config();
const {winstonLevelLogger} = require("../services/logger.services");

const healthCheck = async (req, res) => {
  return res.send(`✅ 🚀 Env: ${process.env.NODE_ENV}`);   
};

const checkDBConnection = async (req, res) => {
  var sequelize = (sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      dialect: "mysql",
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      logging: false,
      define: { underscored: true },
    }
  ));

  await sequelize
    .authenticate()
    .then(() => {
      winstonLevelLogger.info(`Database validated succesfullly`);
      res.status(200).json({})
    })
    .catch((err) => {
      winstonLevelLogger.error(`Failed to validate database for DB: ${process.env.DATABASE_NAME} ${err}`);
      res.status(500).json({ err })
    });
};

module.exports = {
  healthCheck,
  checkDBConnection,
};
