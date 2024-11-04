import { ReactNode } from "react";

export interface IPropsAlert {
  type: alertType;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

type alertType = "alert-success" | "alert-default" |"alert-info" |"alert-warning" | "alert-error";
