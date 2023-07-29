"use client"

import Image from "next/image";

const SvgIcon = ({ iconName, width }: { iconName: string; width?: number }) => {
  const icon = require(`../../assets/icons/${iconName}.svg`);
  return <Image priority src={icon} width={width} alt={iconName} />;
};

export default SvgIcon;
