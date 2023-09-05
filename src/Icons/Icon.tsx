import React from "react";
import Icons from "./_sprite.svg";
import PropTypes from 'prop-types';

interface Icon {
  name: string;
  color?: string;
  size?: number;
  size2?: number;
  className?: string;
};

const Icon = ({ name, color, size, size2, className }: Icon) => (
    <svg className={`icon icon-${name}` + className} fill={color} width={size} height={size2 ? size2 : size} >
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
 
  Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number
  };
   
  export default Icon;
