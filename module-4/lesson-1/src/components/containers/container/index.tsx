import React from 'react';
import "./style.scss"
import type { ContainerProps } from '../../../types';


export  const Container: React.FC<ContainerProps>=({children, className}) => {
    return (
        <div className={`container ${className && className}`}>
            {children}
        </div>
    );
};

