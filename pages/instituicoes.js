import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons/'


export function instituicoes() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.containerInstituicao}>
                <View style={ESTILO.calendario}>
                    <View style={ESTILO.calendario}>
                        <Text style={ESTILO.textoCalendario}>
                            calendario
                        </Text>
                        <Ionicons name="home-outline" style={ESTILO.iconeCalendario} />
                    </View>
                    <Ionicons name="calendar-clear-outline" style={ESTILO.iconeCalendario} />
                </View>
                <View style={ESTILO.titulosInstituicoes}>
                    <Text style={ESTILO.tituloInstituições}>
                        Instituições
                    </Text>
                    <Text style={ESTILO.subtituloInstituicoes}>
                        Verifique aqui!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    containerInstituicao: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30
    },
    calendario: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoCalendario: {
        color: '#3C4146',
        fontSize: 20,
        paddingRight: 15
    },
    iconeCalendario: {
        fontSize: 20,
        color: '#3C4146'
    },
    titulosInstituicoes: {
        marginTop: 40
    },
    tituloInstituições: {
        fontSize: 23,
        fontWeight: 500,
        color: '3C4146'
    },
    subtituloInstituicoes: {
        fontSize: 18,
        color: '#292828'
    }

})