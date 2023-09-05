import React from 'react';
import styles from './text.css';
import classNames from 'classnames'


type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: Tsizes;
  mobilesize?: Tsizes;
  tabletsize?: Tsizes;
  desktopsize?: Tsizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span',
    color = EColor.black,
    bold = false,
    children,
    size, mobilesize,
    desktopsize,
    tabletsize
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles.bold]: bold},
    { [styles[`m${mobilesize}`]]: mobilesize },
    { [styles[`t${tabletsize}`]]: tabletsize },
    { [styles[`d${desktopsize}`]]: desktopsize },
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
