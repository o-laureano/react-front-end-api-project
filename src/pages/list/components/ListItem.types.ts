export interface Album {
  id: string;
  images: { url: string }[];
  name: string;
  artists: { name: string }[];
  release_date: string;
}

export interface ListItemProps {
  album?: Album;
  onClick?: (id: string) => void;
}
