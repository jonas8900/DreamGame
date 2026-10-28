// pages/api/checkConnection.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Teste eine einfache Datenbankoperation, z.B. Auflisten der Collections
    const collections = await db.listCollections().toArray();

    res.status(200).json({
      success: true,
      message: 'Database connection is successful',
      collections: collections.map((col) => col.name),
    });
  } catch (error) {
    console.error('Database connection failed', error);
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
    });
  }
}
