import { getCollection } from './_database';

export default async (req, res) => {
  const itemsCollection = await getCollection('items');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const items = await itemsCollection.find().toArray();
  res.end(JSON.stringify({ items }));
};
