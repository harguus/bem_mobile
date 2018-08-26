import React from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import { modificarCurso, modificarIdade, modificarPeriodo, modificarTurno } from '../actions/DadosDoParticipanteActions';

const PassoAPasso = props => {

        return(
            <View>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>
                        Como funciona?
                    </Text>
                    <Text style={styles.texts}>
                    Ná próxima tela, será listado os testes(questionários) a serem respondidos com questões de multipla escolha e ao final após clicar no botão enviar, será exibido o resultado do teste e as condições.
                    </Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.h1}>Dados do participante</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder="idade"
                        value={props.idade}
                        onChangeText={ idade => props.modificarIdade(idade)}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Curso"
                        value={props.curso}
                        onChangeText={ curso => props.modificarCurso(curso)}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="turno"
                        value={props.turno}
                        onChangeText={ turno => props.modificarTurno(turno)}
                        />
                    <TextInput
                        style={styles.inputs}
                        placeholder="periodo"
                        value={props.periodo}
                        onChangeText={ periodo => props.modificarPeriodo(periodo)}
                        />
                    <Text></Text>
                    <View style={styles.viewVerMais}>
                        <Button
                            title={'Questionários'}
                            onPress={() => { Actions.listaQuestionarios() }}
                        />
                    </View>
                </View>
            </View>
        )
}


const styles = StyleSheet.create({
    cardBody: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },
    texts: {
        color: '#000',
        margin: 10,
    },
    inputs: {
        marginLeft: 10,
        marginRight: 10,
    },
    viewVerMais: {
        alignItems: 'flex-end',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    }
})

const mapStateToProps = state => (
    {
        curso: state.DadosDoParticipante.curso,
        idade: state.DadosDoParticipante.idade,
        periodo: state.DadosDoParticipante.periodo,
        turno: state.DadosDoParticipante.turno
    }

)

export default connect(mapStateToProps, { modificarCurso, modificarIdade, modificarPeriodo, modificarTurno})(PassoAPasso);