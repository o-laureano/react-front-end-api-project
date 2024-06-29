import React from "react";
import {
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemInfoDescription,
  ItemInfoHeader,
} from "../../list/components/ListItem.styles";
import { ListItemProps } from "../../list/components/ListItem.types";

const ListItem: React.FC<ListItemProps> = ({ album, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(album.id);
    }
  };

  return (
    <ItemCard onClick={handleClick}>
      <ItemImage src={album.images[0].url} alt={album.name} width="200" />
      <ItemInfo>
        <ItemInfoHeader>{album.name}</ItemInfoHeader>
        <ItemInfoDescription>
          <p>{album.artists.map((artist) => artist.name).join(", ")}</p>
          <p>Lançamento: {album.release_date}</p>
        </ItemInfoDescription>
      </ItemInfo>
    </ItemCard>
  );
};

export default ListItem;
