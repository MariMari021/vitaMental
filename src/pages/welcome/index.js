import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={300}
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={300} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                    Vitalidade é fundamental!
                </Text>
                <Text style={styles.text}>
                    Faça o login para começar
                </Text>

                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn') }
                >
                    <Text style={styles.buttonText}>
                        Acessar
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
    containerLogo: {
        flex: 2,
        backgroundColor: '#3C4146',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 38,
        marginBottom: 24
    },
    text: {
        color: '#000',
        fontSize: 18
    },
    button: {
        position: 'absolute',
        backgroundColor: '#3C4146',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})