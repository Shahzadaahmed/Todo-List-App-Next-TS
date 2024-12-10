// Note: Main Input component...!

import React, { FC, memo } from 'react';
import { InputProps } from '@/types/types';

const Input: FC<InputProps> = ({ inputValue, onChangeHandler }) => {
    return (
        <input
            type="text"
            placeholder='Write Something...'
            autoFocus
            value={inputValue}
            onChange={(e) => onChangeHandler(e.target.value)}
        />
    );
};

export default memo(Input);