export interface Album {
  id: string;
  images: { url: string }[];
  name: string;
  artists: { name: string }[];
  release_date: string;
  genres: string;
  tracks: {
    items: {
      id: string;
      name: string;
      duration_ms: number;
    }[];
}

export interface ListItemProps {
  album?: Album;
  onClick?: (id: string) => void;
}
