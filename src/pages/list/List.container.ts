import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAlbumsByArtistName } from "../../services/spotifyApi";

export const useAlbums = (artistName: string) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlbumsByArtistName(artistName);
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [artistName]);

  const handleCardClick = (id: string) => {
    navigate(`/info/${id}`);
  };

  return {
    albums,
    error,
    handleCardClick,
  };
};
