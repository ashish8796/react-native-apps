const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'TodosDB';
const dbConnection = async () => {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  return client.db(dbName);
}


module.exports = dbConnection();