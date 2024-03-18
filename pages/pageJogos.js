import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons/'

export function pageJogos() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.container}>
                <View style={ESTILO.calendario}>
                    <View style={ESTILO.calendario}>
                        <Text style={ESTILO.textoCalendario}>
                            calendario
                        </Text>
                        <Ionicons name="home-outline" style={ESTILO.iconeCalendario} />
                    </View>
                    <Ionicons name="calendar-clear-outline" style={ESTILO.iconeCalendario} />
                </View>
                <View style={ESTILO.doenca}>

                </View>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        backgroundColor: "#3c4146",
        height: 560,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    calendario: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoCalendario: {
        color: '#fff',
        fontSize: 20,
        paddingRight: 15
    },
    iconeCalendario: {
        fontSize: 20,
        color: '#fff'
    },
    doenca: {
        backgroundColor:'#fff',
        margin: 20,
        backgroundColor: '#fff'
    }

})