import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusSquareFilled } from '@ant-design/icons'

import { Tarefa } from '../Tarefa/Tarefa';

export const Input = (props) => {

  const [tarefas, setTarefas] = useState([]);

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const Input = styled.input`
        border-radius: 3px;
        padding: 5px;
        height: 25px;
        background-color: #282a36;
        color: #fff;
        border: 1px solid #6272a4;
        max-width: 315px;
        min-width: 315px;
        font-size: 20px;
    `

    const Button = styled.span`
        color: #50fa7b;
        font-size: 35px;
        cursor: pointer;
        padding: 3px;
    `

    return (
        <div>
            <Wrapper>
                <Input id="inputField" />
                <Button onClick={() => { setTarefas((tarefa) => [...tarefa, document.getElementById('inputField').value]) }} ><PlusSquareFilled /></Button>
            </Wrapper>

            <Wrapper>
                <Tarefa 
                    value={tarefas}
                    onChange={(index, novoValor) => {
                        const tarefasAtualizadas = [...tarefas];
                        tarefasAtualizadas.splice(index, 1);
                        setTarefas(tarefasAtualizadas);
                    }}
                />
            </Wrapper>

        </div>
    )
}