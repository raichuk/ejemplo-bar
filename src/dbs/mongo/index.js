const electron = window.require('electron');
const {MongoClient} = electron.remote.require('mongodb');

let dbConnection;

module.exports = {

  connect: url =>
    MongoClient.connect(url)
      .then(db => dbConnection = db.db('tres-bares')),

  getConnection: collectionName => dbConnection.collection(collectionName)
 
};
  
