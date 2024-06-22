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
    throw new Error("Impossível de buscar os dados do artista.");
  }

  const data = await response.json();
  return data;
};

export const getAlbumsByArtistName = async (artistName: string) => {
  const accessToken = await getAccessToken();
  const searchResponse = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      artistName
    )}&type=artist&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!searchResponse.ok) {
    throw new Error("Impossível de buscar os dados do artista.");
  }

  const searchData = await searchResponse.json();
  const artistId = searchData.artists.items[0].id;

  const albumsResponse = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&market=US&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!albumsResponse.ok) {
    throw new Error("Impossível de buscar os álbuns do artista.");
  }

  const albumData = await albumsResponse.json();
  return albumData.items;
};
