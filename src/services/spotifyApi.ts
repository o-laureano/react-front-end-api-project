import { getAccessToken } from "./auth";

export const getArtistData = async (artistId: string) => {
  const accessToken = await getAccessToken();
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch artist data");
  }

  const data = await response.json();
  return data;
};
