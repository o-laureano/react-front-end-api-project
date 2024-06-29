import React from "react";
import { ListItemProps } from "../list/components/ListItem.types";
import InfoItem from "./components/InfoItem";

const InfoPage: React.FC<ListItemProps> = ({ album }) => {
  return <InfoItem />;
};

export default InfoPage;
