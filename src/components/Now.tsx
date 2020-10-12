import React from "react";
import moment from "moment";

export const Now = () => {
  const lang = navigator.language;
  moment.locale("fr");
  return <span>{moment().format("DD-MMMM-YY")}</span>;
};
