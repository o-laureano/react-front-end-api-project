import React from "react";
import {
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemInfoDescription,
  ItemInfoHeader,
} from "../../list/components/ListItem.styles";
import { Album } from "../../list/components/ListItem.types";

interface InfoItemProps {
  album: Album;
}

const InfoItem: React.FC<InfoItemProps> = ({ album }) => {
  return (
    <ItemCard>
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

export default InfoItem;
