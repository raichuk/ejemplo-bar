const mongoDb = require('../../dbs/mongo');

function mesa() {
  const db = mongoDb.getConnection('Mesa');

  function abrir() {

  }

  async function traerTodas() {
    return await db.find({}).toArray();
  }


  return {
    traerTodas
  }

}

export {
  mesa
};
