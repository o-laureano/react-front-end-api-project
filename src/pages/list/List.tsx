import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import { ItemCard, ItemImage, ItemInfo } from "./components/ListItem.styles";
import { getAlbumsByArtistName } from "../../services/spotifyApi";

const ListPage: React.FC = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (albums.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <PageContainer>
      <ActionsContainer>
        <Dropdown />
        <Pagination />
      </ActionsContainer>
      <ListRow>
        {albums.map((album) => (
          <ItemCard key={album.id}>
            <ItemImage src={album.images[0].url} alt={album.name} width="200" />
            <ItemInfo>
              <h1>{album.name}</h1>
              <p>
                {album.artists.map((artist: any) => artist.name).join(", ")}
              </p>
              <p>{album.release_date}</p>
            </ItemInfo>
          </ItemCard>
        ))}
      </ListRow>
    </PageContainer>
  );
};

export default ListPage;
