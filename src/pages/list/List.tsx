import Dropdown from "../../components/dropdown/Dropdown";
import Pagination from "../../components/pagination/Pagination";
import { ActionsContainer, ListRow, PageContainer } from "./List.styles";
import { ItemCard } from "./components/ListItem.styles";

const ListPage = () => {
  return (
    <PageContainer>
      <ActionsContainer>
        <Dropdown />
        <Pagination />
      </ActionsContainer>
      <ListRow>
        <ItemCard>
          <h1>lal</h1>
        </ItemCard>
        <ItemCard>
          <h1>lal</h1>
        </ItemCard>
        <ItemCard>
          <h1>lal</h1>
        </ItemCard>
        <ItemCard>
          <h1>lal</h1>
        </ItemCard>
        <ItemCard>
          <h1>lal</h1>
        </ItemCard>
      </ListRow>
    </PageContainer>
  );
};

export default ListPage;
