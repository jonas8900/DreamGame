import { fetchWithRetry } from '../../lib/fetchWithRetry';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { appIds } = req.body;
  if (!Array.isArray(appIds) || appIds.length === 0) {
    res.status(400).json({ error: 'Invalid input. appIds should be a non-empty array.' });
    return;
  }

  const client = await clientPromise;
  const db = client.db('DreamGames');
  const detailsCollection = db.collection('game_details');

  let failedAppIds = [];
  let successfulAppIds = [];

  for (let appId of appIds) {
    try {
      const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
      const response = await fetchWithRetry(url, { method: 'GET' });
      const details = response;

      if (details[appId] && details[appId].success) {
        await detailsCollection.updateOne(
          { appid: parseInt(appId) },
          { $set: { appid: parseInt(appId), details: details[appId].data } },
          { upsert: true }
        );
        successfulAppIds.push(appId);
      } else {
        failedAppIds.push(appId);
      }
    } catch (error) {
      console.error(`Error fetching details for appid: ${appId}`, error);
      failedAppIds.push(appId);
    }
  }

  res.status(200).json({ success: true, successfulAppIds, failedAppIds });
}
