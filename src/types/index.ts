import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  styles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchKitchenTypeProps {
  kitchenType: string;
  setKitchenType: (kitchenType: string) => void;
}
