import React from "react";
import {
  ItemImage,
  ItemInfo,
  ItemInfoDescription,
  ItemInfoHeader,
} from "../../list/components/ListItem.styles";
import { Album } from "../../list/components/ListItem.types";
import {
  AlbumTrack,
  AlbumTracks,
  InfoItemBox,
  InfoItemInfos,
  InfoSubtext,
  InfoText,
  MainInfo,
  MainInfoHeader,
} from "./InfoItem.styles";

interface InfoItemProps {
  album: Album;
}

const InfoItem: React.FC<InfoItemProps> = ({ album }) => {
  return (
    <InfoItemBox>
      <ItemImage src={album.images[0].url} alt={album.name} width="200" />
      <InfoItemInfos>
        <MainInfo>
          <MainInfoHeader>{album.name}</MainInfoHeader>
          <InfoText>
            <p>{album.artists.map((artist) => artist.name).join(", ")}</p>
            <p>Lançamento: {album.release_date}</p>
            <p>Gênero: {album.genres.join(", ")}</p>
          </InfoText>
          <AlbumTracks>
            <MainInfoHeader>Músicas:</MainInfoHeader>
            {album.tracks.items.map((track) => (
              <AlbumTrack key={track.id}>
                <InfoText>{track.name}</InfoText>
                <InfoSubtext>{msToTime(track.duration_ms)}</InfoSubtext>
              </AlbumTrack>
            ))}
          </AlbumTracks>
        </MainInfo>
      </InfoItemInfos>
    </InfoItemBox>
  );
};

function msToTime(duration: number): string {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export default InfoItem;
