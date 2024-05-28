import React from "react";

export interface IIProps {
  loading: boolean;
  isSidebarOpen: boolean;
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export interface HeroProps {
  type: string;
  name: string;
  isSelected: boolean;
  id: number;
}


export type QuestionsProps = {
  id: number;
  name: string;
  isGeneral: boolean;
  isProcess: boolean;
}