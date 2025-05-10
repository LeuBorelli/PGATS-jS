/**
*/


import {GATOS} from './Ex-Ind-09-export.js'

function entregarPetiscos(listaDeGatos) {
    listaDeGatos.forEach(gato => {
        console.log(`Entregando petisco para ${gato}`)
    })
}

entregarPetiscos(GATOS);
