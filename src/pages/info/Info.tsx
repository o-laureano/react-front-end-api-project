import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoItem from "./components/InfoItem";
import { getAlbumById } from "../../services/spotifyApi";
import { Album } from "../list/components/ListItem.types";

const InfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const data = await getAlbumById(id!);
        setAlbum(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return <InfoItem album={album} />;
};

export default InfoPage;
