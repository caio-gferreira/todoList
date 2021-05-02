import React from 'react';
import styled from 'styled-components';

export const Header = () => {

    const Titulo = styled.h1`
        color: #f8f8f2;
    `

    return (
        <div>
            <Titulo> To Do List </Titulo>
        </div>
    )
}