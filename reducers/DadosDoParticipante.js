const INITIAL_STATE = {
    curso: 'TADS',
    idade: '31',
    periodo: '5',
    turno: 'Vespertino'
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == 'modifica_curso'){
        return { ...state, curso: action.payload}
    }
    if (action.type == 'modifica_idade'){
        return { ...state, idade: action.payload}
    }
    if (action.type == 'modifica_periodo'){
        return { ...state, periodo: action.payload}
    }
    if (action.type == 'modifica_turno'){
        return { ...state, turno: action.payload}
    }

    return state;
}

