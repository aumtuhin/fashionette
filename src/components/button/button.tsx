import React from 'react';
import './button.styles.scss';

const Button: React.FC<{ name: string }>  = ({ name }) => {
  return (
    <button className='btn-default'>{name}</button>
  )
}

export default Button;