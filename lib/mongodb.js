import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In der Entwicklungsumgebung verwenden wir eine Singleton-Verbindung
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = global._mongoClientPromise = client.connect();
  }
} else {
  // In der Produktion erstellen wir ein neues Client-Objekt bei jedem Zugriff
  clientPromise = client.connect();
}

export default clientPromise;
