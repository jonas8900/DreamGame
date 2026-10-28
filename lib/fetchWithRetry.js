// lib/fetchWithRetry.js
export async function fetchWithRetry(url, options, retries = 3) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        console.warn(`Retrying request (${retries} retries left)...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return fetchWithRetry(url, options, retries - 1);
      } else {
        throw error;
      }
    }
  }
  