import { MongoClient, Db, Collection } from 'mongodb';

let client = null;

const getDatabase = async () => {
  //condition pour éviter la connection à Mongo à chaque requête.Sinon ça génère un pb de performance -> cf dans la console, selectionner la requête puis onglet network puis timing
  if (!client) {
    console.log('Connecting to database', process.env.DATABASE_URL);
    client = await MongoClient.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return client.db();
};

const getCollection = async (name) => {
  const database = await getDatabase();
  return database.collection(name);
};

export { getCollection };
