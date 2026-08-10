import { ReactNode } from "react";

import { HeaderAction } from "../Header/Header.types";

export interface HeaderLayoutProps {
  children: ReactNode;

  title: string;

  leftAction?: HeaderAction;

  rightAction?: HeaderAction;
}