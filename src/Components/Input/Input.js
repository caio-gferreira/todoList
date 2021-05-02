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
        border-radius: 5px;
        padding: 5px;
        height: 15px;
    `

    const Button = styled.span`
        color: #bd93f9;
        font-size: 30px;
        cursor: pointer;
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