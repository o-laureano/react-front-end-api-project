// src/pages/List.tsx
import Dropdown from "../../components/dropdown/Dropdown";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import { useAlbums } from "./List.container";
import { usePagination } from "../../components/pagination/Pagination.container";
import ListItem from "./components/ListItem";

const ListPage: React.FC = () => {
  const { albums, error, handleCardClick } = useAlbums("zeze");
  const { currentPage, totalPages, handlePageChange, paginatedItems } =
    usePagination(albums.length);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (albums.length === 0) {
    return <div>Carregando...</div>;
  }

  const paginatedAlbums = paginatedItems(albums);

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
        {paginatedAlbums.map((album) => (
          <ListItem key={album.id} album={album} onClick={handleCardClick} />
        ))}
      </ListRow>
    </PageContainer>
  );
};

export default ListPage;
