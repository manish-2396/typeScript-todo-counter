import React from 'react';

interface HeaderProps{
    label?: string;
    children?: JSX.Element | JSX.Element[];
}

//label -> string
const Header = ({label = 'Default label', children}: HeaderProps) => {
  return (
    <>
    <h2>{label}</h2>
    {children}
    </>
  )
}
//Prop-Types
export default Header