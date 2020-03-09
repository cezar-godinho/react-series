import React from 'react';
import Contador from './Contador';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/06/2020",
        horario: "19h",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengo",
    }
};


export default class App extends React.Component {
    render() {
        return (
            <PlacarContainer {...dados}/>
        );
    }
}
