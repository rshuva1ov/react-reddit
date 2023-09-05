import * as React from "react";
import { EColor, Text } from "../Text/Text";

interface IGenericListProps {
  list: IItem[];
}

interface IItem {
  id: string;
  onClick: (id: string) => void;
  className: string;
  image?: React.ReactElement;
  text?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "div", text, onClick, className, id, href, image }) => (
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {image}
           <Text size={12} color={EColor.grey99}>{text}</Text>
        </As>
      ))}
    </>
  );
}
