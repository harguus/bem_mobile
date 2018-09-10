export const modificarCurso = (curso) => {
    return{
        type: 'modifica_curso',
        payload: curso
    }
}

export const modificarIdade = (idade) => {
    return{
        type: 'modifica_idade',
        payload: idade
    }
}

export const modificarPeriodo = (periodo) => {
    return{
        type: 'modifica_periodo',
        payload: periodo
    }
}

export const modificarTurno = (turno) => {
    return{
        type: 'modifica_turno',
        payload: turno
    }
}


/*
curso
idade
periodo
turno
*/