import fetch from "node-fetch"; 
import clientPromise from "../../lib/mongodb"; 

export default async function handler(req, res) {
  console.log("Processing batches...");

  try {
    const client = await clientPromise;
    const db = client.db("DreamGames");
    const detailsCollection = db.collection("game_details");
    const batchSize = 10; 
    const appIds = await db.collection("SteamGames").find().toArray();

    console.log(`Found ${appIds.length} appIds`);

    for (let i = 0; i < appIds.length; i += batchSize) {
      const batch = appIds.slice(i, i + batchSize);
      console.log(
        `Processing batch ${i / batchSize + 1} of ${Math.ceil(
          appIds.length / batchSize
        )}`
      );

      for (let app of batch) {
        const appId = app.appid;
        try {
          const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
          const response = await fetch(url);
          const details = await response.json();

          if (details[appId] && details[appId].success) {
            console.log(`Updating details for appId: ${appId}`);
            await detailsCollection.updateOne(
              { appid: parseInt(appId) },
              {
                $set: { appid: parseInt(appId), details: details[appId].data },
              },
              { upsert: true }
            );
            console.log(`Successfully saved details for appId: ${appId}`);
          } else {
            console.warn(`Failed to get details for appId: ${appId}`);
          }
        } catch (error) {
          console.error(`Error fetching details for appId: ${appId}`, error);
        }
      }


      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    console.log("Batch processing completed");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in processing batches:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
