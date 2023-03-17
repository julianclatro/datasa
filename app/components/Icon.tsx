import React from 'react';
import clsx from 'clsx';
export const icons = {
  chevron_down: 'M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-100.69-28.69l-96 96a16 16 0 01-22.62 0l-96-96a16 16 0 0122.62-22.62L256 289.37l84.69-84.68a16 16 0 0122.62 22.62z',
  edit: 'M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z' +
  'M386.34 193.66L264.45 315.79A41.08 41.08 0 01247.58 326l-25.9 8.67a35.92 35.92 0 01-44.33-44.33l8.67-25.9a41.08 41.08 0 0110.19-16.87l122.13-121.91a8 8 0 00-5.65-13.66H104a56 56 0 00-56 56v240a56 56 0 0056 56h240a56 56 0 0056-56V199.31a8 8 0 00-13.66-5.65z',
};

export const iconAssert = (name: string) => {
  switch (name) {
    case 'chevron_down':
      return icons.chevron_down
    case 'edit':
      return icons.edit
  }
};

type IconProps = {
  name: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
  color?: string;
  viewBox?: string;
  customCss?: string;
};

type PathProps = {
  name: string;
  color?: string;
  outline?: boolean;
};

const Path: React.FC<PathProps> = ({ name, color }) => {
  const icon = iconAssert(name);
  // return (
  //   <path
  //     d={icon}
  //     className={`stroke-current ${color}`}
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   />
  // );
  return <path d={icon} className="w-full" fill='currentColor'/>;
};

export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  color,
  viewBox = '0 0 512 512',
  size = 'small',
  customCss,
}) => {
  const iconStyle = clsx(
    size === 'tiny' && 'w-[18px] h-[18px]',
    size === 'small' && 'w-[22px] h-[22px]',
    size === 'medium' && 'w-[30px] h-[30px]',
    size === 'large' && 'w-[36px] h-[36px]',
    size === 'xlarge' && 'w-[48px] h-[48px] flex justify-center',
    `${customCss}`
  );

  return (
    <svg viewBox={viewBox} className={iconStyle} fill="currentColor">
      <Path name={name} color={color} />
    </svg>
  );
};
