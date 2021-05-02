import React, {useState} from 'react';
import { DeleteFilled } from '@ant-design/icons';
import styled from 'styled-components';

export const Tarefa = (props) => {
    let tarefa = props.value;

    const deleteItem = (index) => {
        props.onChange(index)
    }

    const Task = styled.div`
        padding: 5px;
        width: 100%;
        font-size: 20px;
    `

    const Wrapper = styled.div`
        background-color: #6272a4;
        color: #fff;
        margin: 5px;
        border-radius: 5px;
        max-width: 360px;
        min-width: 360px;
        display: flex;
        align-items: center;
        text-align: justify;
        padding: 5px;
    `

    const DeleteButton = styled.span`
        font-size: 20px;
        cursor: pointer;
        margin-left: 0 5px;
        &:hover {
            color: #e91e63;
            transition: 300ms;
        }
    `

    return (
        <div>
            { tarefa.map((valorTarefa, index) => {
                return(
                    <div>
                        <Wrapper >
                            <Task 
                                onChange={(novoValor) => {props.onChange(index, novoValor)}} 
                            >
                                {valorTarefa} 
                            </Task>
                            <DeleteButton onClick={() => deleteItem(index)}>
                                <DeleteFilled />
                            </DeleteButton>
                        </Wrapper>
                    </div>
                )
            })}
        </div>
    )
}