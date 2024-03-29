import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={400} style={styles.containeHeader}>
                <Text style={styles.message}>
                    Bem-vindo(a)
                </Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={800} style={styles.containerForm}>
                <Text style={styles.title}>
                    Email
                </Text>
                <TextInput
                    placeholder='Digite seu email.'
                    style={styles.input}
                />

                <Text style={styles.title}>
                    Senha
                </Text>
                <TextInput
                    placeholder='Digite sua senha.'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Acessar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text
                        style={styles.registerText}
                        onPress={() => navigation.navigate('Register')} >
                        Não possui uma conta? Cadastre-se.
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C4146'
    },
    containeHeader: {
        marginTop: '14%',
        marginBottom: '14%',
        paddingStart: '9%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '8%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#3C4146',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#7C8288'
    }
})