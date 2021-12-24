const { connect } = require("mongoose");

const connectDB = async () => {
  const db = await connect(process.env.MONGO_DB_URI);
  console.log(
    `MongoDB connected: db-name: ${db.connection.name}, PORT: ${db.connection.port}, host: ${db.connection.host}`
      .cyan
  );
};

module.exports = connectDB;
