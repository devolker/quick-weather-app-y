import React from "react";
import moment from "moment";

interface Props {
  id: string;
}

export const Now: React.FunctionComponent<Props> = ({ id }) => {
  moment.locale("fr");
  return <span id={id}>{moment().format("DD-MMMM-YY")}</span>;
};
