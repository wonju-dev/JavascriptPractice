import React, { useState } from "react";
import { useEffect } from "react";

interface props {
  welcomeMessage: string;
  username?: string;
}

export const Header: React.FC<props> = ({ welcomeMessage }) => {
  const [myState, setMyState] = useState<string>(welcomeMessage);

  return <div>{myState}</div>;
};
