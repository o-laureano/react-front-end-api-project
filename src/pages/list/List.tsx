import React from "react";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import { useAlbums } from "./List.container";
import { usePagination } from "../../components/pagination/Pagination.container";
import ListItem from "./components/ListItem";
import SearchInput from "../../components/searchInput/SearchInput";
import { useState } from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 8;

const ListPage: React.FC = () => {
  const [artistName, setArtistName] = useState("gojira");
  const { albums, error, handleCardClick } = useAlbums(artistName);

  const navigate = useNavigate();
  const handleRestartApplication = () => {
    navigate("/");
  };

  const { currentPage, totalPages, handlePageChange, paginatedItems } =
    usePagination(albums.length, itemsPerPage);

  if (error) {
    return (
      <div>
        Este artista não existe e infelizmente quebrou a aplicação toda kkkkkkk
        <Button onClick={handleRestartApplication}>Reiniciar aplicação</Button>
      </div>
    );
  }

  if (albums.length === 0) {
    return <div>Carregando...</div>;
  }

  const paginatedAlbums = paginatedItems(albums);

  return (
    <PageContainer>
      <ActionsContainer>
        <SearchInput onSearch={setArtistName} />
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
