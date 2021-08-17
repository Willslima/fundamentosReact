import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from './components/basicos/NumeroAleatório'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/parOuImpar'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/Contador'


export default _ =>
    <div className="app">
        <h1>Fundamentos React!</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#FA6900">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#02 - Numero Aleatório" color="#E94C6F">
                <NumeroAleatorio min={0} max={100} />
            </Card>
            <Card titulo="#03 - Exemplo de card" color="#588C73">
                <ComParametro
                    titulo='Situação do Aluno'
                    nome='Pedro'
                    nota={9.3} />
            </Card>
            <Card titulo="#04 - Componente com filhos" color="#4169E1">
                <Familia sobrenome="Lima">
                    <FamiliaMembro nome="Will" ></FamiliaMembro>
                    <FamiliaMembro nome="Lari"></FamiliaMembro>
                    <FamiliaMembro nome="Helena" ></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#05 - Alunos e notas" color="#191970">
                    <ListaAlunos/>
            </Card>
            <Card titulo="#06 - Lista de produtos " color="#1E90FF">
                    <ListaProdutos/>
            </Card>
            <Card titulo="#07 - Par ou Impar " color="#4682B4">
                    <ParOuImpar numero={21}/>
            </Card>
            <Card titulo="#08 - Comunicação Indireta " color="#FA6900">
                    <IndiretaPai/>
            </Card>
            <Card titulo="#09 - Componente controlado " color="#E94C6F">
                    <Input/>
            </Card>

            <Card titulo="#10 - Contador " color="#588C73">
                    <Contador numeroInicial={10}/>
            </Card>
        </div>
    </div>
