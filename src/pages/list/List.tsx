import { useEffect, useState } from "react";
import { getArtistData } from "../../services/spotifyApi";
import Dropdown from "../../components/dropdown/Dropdown";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import { ItemCard } from "./components/ListItem.styles";

const ListPage: React.FC = () => {
  const [artistData, setArtistData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtistData("4Z8W4fKeB5YxbusRsdQVPb");
        setArtistData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!artistData) {
    return <div>Loading...</div>;
  }
  return (
    <PageContainer>
      <ActionsContainer>
        <Dropdown />
        <Pagination />
      </ActionsContainer>
      <ListRow>
        <ItemCard>
          <h1>{artistData.name}</h1>
          <p>Followers: {artistData.followers.total}</p>
          <p>Genres: {artistData.genres.join(", ")}</p>
          <img
            src={artistData.images[0].url}
            alt={artistData.name}
            width="200"
          />
        </ItemCard>
      </ListRow>
    </PageContainer>
  );
};

export default ListPage;
