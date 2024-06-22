import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import {
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemInfoDescription,
  ItemInfoHeader,
} from "./components/ListItem.styles";
import { getAlbumsByArtistName } from "../../services/spotifyApi";

const itemsPerPage = 8;

const ListPage: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAlbumsByArtistName("Grateful Dead");
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(albums.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (albums.length === 0) {
    return <div>Carregando...</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginationAlbums = albums.slice(startIndex, startIndex + itemsPerPage);

  return (
    <PageContainer>
      <ActionsContainer>
        <Dropdown />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ActionsContainer>
      <ListRow>
        {paginationAlbums.map((album) => (
          <ItemCard key={album.id}>
            <ItemImage src={album.images[0].url} alt={album.name} width="200" />
            <ItemInfo>
              <ItemInfoHeader>{album.name}</ItemInfoHeader>
              <ItemInfoDescription>
                <p>
                  {album.artists.map((artist: any) => artist.name).join(", ")}
                </p>
                <p>Lançamento: {album.release_date}</p>
              </ItemInfoDescription>
            </ItemInfo>
          </ItemCard>
        ))}
      </ListRow>
    </PageContainer>
  );
};

export default ListPage;
