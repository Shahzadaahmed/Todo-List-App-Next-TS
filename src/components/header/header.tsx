// Note: Header component...!

import React, { FC, memo } from 'react';
import { HeaderProps } from '@/types/types';

const Header: FC<HeaderProps> = ({ heading }) => {
    return (
        <h1> {heading} </h1>
    );
};

export default memo(Header);