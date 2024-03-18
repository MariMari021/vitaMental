import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons/'

export function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={ESTILO.header}>
                    <View style={ESTILO.vita}>
                        <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
                        <Text style={ESTILO.titulo}>
                            VitaMental
                        </Text>
                    </View>
                    <Text style={ESTILO.subtitulo}>
                        Vitalidade é fundamental.
                    </Text>
                    <View style={ESTILO.interImg}>
                        <Image source={require("../assets/mulherQuebraCabeca.png")} style={ESTILO.imgInter} />
                    </View>
                </View>
                <View style={ESTILO.butoes}>
                    <TouchableOpacity style={ESTILO.botaoExercicioJogo}>
                        <View style={ESTILO.exercicioJogo}>
                            <Text style={ESTILO.tituloBotao}>
                                Exercícios
                            </Text>
                            <Ionicons name="arrow-up-circle-outline" style={ESTILO.iconeBotao} />
                        </View>
                        <Text style={ESTILO.textoBotao}>
                            Pratique sempre os exercícios indicados para fortalecer os ossos.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ESTILO.botaoExercicioJogo}>
                        <View style={ESTILO.exercicioJogo}>
                            <Text style={ESTILO.tituloBotao}>
                                Jogos
                            </Text>
                            <Ionicons name="arrow-up-circle-outline" style={ESTILO.iconeBotao} />
                        </View>
                        <Text style={ESTILO.textoBotao}>
                            Pratique sempre os jogos fornecidos para estimular a mente.
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={ESTILO.conhecaMais}>
                    <TouchableOpacity style={ESTILO.botaoConhecaMais}>
                        <Text style={ESTILO.tituloConhecaMais}>
                            Conheça +
                        </Text>
                        <Text style={ESTILO.textoConhecaMais}>
                            Sobre doenças que afetam o sistema nervoso de muitos idosos, resultando em dificuldades cognitivas.
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 20,
        backgroundColor: "#3C4146",
        height: 400,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    vita: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 40
    },
    logo: {
        height: 60,
        width: 60
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 500,

    },
    subtitulo: {
        color: '#D2CDCD',
        fontSize: 18,
        marginLeft: 50
    },
    interImg: {
        paddingTop: 20,
        alignItems: 'center'
    },
    imgInter: {
        height: 250,
        width: 250
    },
    butoes: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    botaoExercicioJogo: {
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 35,
        padding: 18,
        backgroundColor: '#3C4146',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    exercicioJogo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    tituloBotao: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 500
    },
    textoBotao: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        color: '#ffffffe8'
    },
    iconeBotao: {
        fontSize: 30,
        color: '#fff',
        transform: [{ rotate: '45rad' }],
        width: 20,
        marginTop: -8
    },
    conhecaMais: {
        alignItems: 'center',
        marginTop: 50,
        height: 175
    },
    botaoConhecaMais: {
        backgroundColor: '#3C4146',
        width: 310,
        height: 130,
        borderRadius: 35,
        padding: 20
    },
    tituloConhecaMais: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 500
    },
    textoConhecaMais: {
        color: '#ffffffe8',
        fontSize: 14
    }

})