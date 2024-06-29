import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAlbumsByArtistName } from "../../services/spotifyApi";

const itemsPerPage = 8;

export const useAlbums = (artistName: string) => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.ceil(albums.length / itemsPerPage);

  const handleCardClick = (id: string) => {
    navigate(`/info/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginationAlbums = albums.slice(startIndex, startIndex + itemsPerPage);

  return {
    albums: paginationAlbums,
    error,
    totalPages,
    currentPage,
    handlePageChange,
    handleCardClick,
  };
};
