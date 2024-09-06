import React from 'react';
import type { SectionProps } from '../../../types';

export const Section:React.FC<SectionProps> = ({children, className}) => {
    return (
        <div className={className && className}>
            {children}
        </div>
    );
};
