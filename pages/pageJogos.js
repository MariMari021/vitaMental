import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
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
                <View style={ESTILO.containerDoenca}>
                    <View style={ESTILO.doenca}>
                        <View style={ESTILO.conteudoDoenca}>
                            <Text style={ESTILO.tituloDoenca}>
                                AVC
                            </Text>
                            <Text style={ESTILO.textoDoenca}>
                                Divirta-se
                            </Text>
                        </View>
                        <View style={ESTILO.imagemDoenca}>
                            <Image source={require("../assets/avc.png")} style={ESTILO.imgDoenca} />
                        </View>
                    </View>
                </View>
                <View style={ESTILO.containerJogos}>
                    <Text style={ESTILO.tituloJogos}>
                        Jogos
                    </Text>
                    <View style={ESTILO.jogosIndividuais}>
                        <TouchableOpacity style={ESTILO.botaoJogosIndividual}>
                            <View style={ESTILO.botaoJogosIndividual}>
                                <View style={ESTILO.iconeMusicJogosIndividuais}>
                                    <Ionicons name="musical-notes-outline" style={ESTILO.MusicJogosIndividuais} />
                                </View>
                                <View style={ESTILO.conteudoJogosIndividuais}>
                                    <Text style={ESTILO.tituloJogosIndividuais}>
                                        Acerte a música
                                    </Text>
                                    <Text style={ESTILO.subtituloJogosIndividuais}>
                                        5 desafios
                                    </Text>
                                </View>
                                <View style={ESTILO.iconeJogosIndividuais}>
                                    <Ionicons name="play-circle-outline" style={ESTILO.iconeJogosIndividuais} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={ESTILO.jogosIndividuais}>
                        <TouchableOpacity style={ESTILO.botaoJogosIndividual}>
                            <View style={ESTILO.botaoJogosIndividual}>
                                <View style={ESTILO.iconeMusicJogosIndividuais}>
                                    <Image source={require("../assets/seteErrosIcone.png")} style={ESTILO.imgJogosIndividuais} />
                                </View>
                                <View style={ESTILO.conteudoJogosIndividuais}>
                                    <Text style={ESTILO.tituloJogosIndividuais}>
                                        Sete erros
                                    </Text>
                                    <Text style={ESTILO.subtituloJogosIndividuais}>
                                        5 desafios
                                    </Text>
                                </View>
                                <View style={ESTILO.iconeJogosIndividuais}>
                                    <Ionicons name="play-circle-outline" style={ESTILO.iconeJogosIndividuais} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={ESTILO.jogosIndividuais}>
                        <TouchableOpacity style={ESTILO.botaoJogosIndividual}>
                            <View style={ESTILO.botaoJogosIndividual}>
                                <View style={ESTILO.iconeMusicJogosIndividuais}>
                                    <Image source={require("../assets/cruzadinhaIcone.png")} style={ESTILO.imgCruzadinhaJogosIndividuais} />
                                </View>
                                <View style={ESTILO.conteudoJogosIndividuais}>
                                    <Text style={ESTILO.tituloJogosIndividuais}>
                                        Cruzadinha
                                    </Text>
                                    <Text style={ESTILO.subtituloJogosIndividuais}>
                                        5 desafios
                                    </Text>
                                </View>
                                <View style={ESTILO.iconeJogosIndividuais}>
                                    <Ionicons name="play-circle-outline" style={ESTILO.iconeJogosIndividuais} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={ESTILO.jogosIndividuais}>
                        <TouchableOpacity style={ESTILO.botaoJogosIndividual}>
                            <View style={ESTILO.botaoJogosIndividual}>
                                <View style={ESTILO.iconeMusicJogosIndividuais}>
                                    <Ionicons name="bulb-outline" style={ESTILO.MusicJogosIndividuais} />
                                </View>
                                <View style={ESTILO.conteudoJogosIndividuais}>
                                    <Text style={ESTILO.tituloJogosIndividuais}>
                                        Quiz
                                    </Text>
                                    <Text style={ESTILO.subtituloJogosIndividuais}>
                                        5 desafios
                                    </Text>
                                </View>
                                <View style={ESTILO.iconeJogosIndividuais}>
                                    <Ionicons name="play-circle-outline" style={ESTILO.iconeJogosIndividuais} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={ESTILO.jogosIndividuais}>
                        <TouchableOpacity style={ESTILO.botaoJogosIndividual}>
                            <View style={ESTILO.botaoJogosIndividual}>
                                <View style={ESTILO.iconeMusicJogosIndividuais}>
                                    <Image source={require("../assets/coresIcone.png")} />
                                </View>
                                <View style={ESTILO.conteudoJogosIndividuais}>
                                    <Text style={ESTILO.tituloJogosIndividuais}>
                                        Acerte as cores
                                    </Text>
                                    <Text style={ESTILO.subtituloJogosIndividuais}>
                                        5 desafios
                                    </Text>
                                </View>
                                <View style={ESTILO.iconeJogosIndividuais}>
                                    <Ionicons name="play-circle-outline" style={ESTILO.iconeJogosIndividuais} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={ESTILO.voltar}>
                        <TouchableOpacity>
                            <Ionicons name="chevron-back-outline" style={ESTILO.voltarJogos} />
                        </TouchableOpacity>
                    </View>
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
        height: 606,
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
    },
    containerDoenca: {
        alignItems: 'center',
        marginTop: 20
    },
    doenca: {
        flexDirection: 'row',
        width: 288,
        height: 104,
        borderRadius: 35,
        backgroundColor: "#7485BF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    tituloDoenca: {
        fontSize: 18,
        color: '#000',
        fontWeight: 500
    },
    textoDoenca: {
        fontSize: 15,
        color: '#292828'
    },
    imgDoenca: {
        width: 82,
        height: 74
    },
    containerJogos: {
        marginTop: 20
    },
    tituloJogos: {
        fontSize: 18,
        color: '#fff'
    },
    jogosIndividuais: {
        marginTop: 20,
    },
    botaoJogosIndividual: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconeMusicJogosIndividuais: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#7485BF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25
    },
    MusicJogosIndividuais: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 100
    },
    imgJogosIndividuais: {
        width: 25,
        height: 25,
    },
    imgCruzadinhaJogosIndividuais: {
        width: 33,
        height: 33
    },
    tituloJogosIndividuais: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fff'
    },
    subtituloJogosIndividuais: {
        fontSize: 13,
        color: '#ffffffe8',
        fontWeight: 400
    },
    conteudoJogosIndividuais: {
        minWidth: 175
    },
    iconeJogosIndividuais: {
        fontSize: 35,
        color: '#fff'
    },
    voltar: {
        marginTop: 15
    },
    voltarJogos: {
        color: '#fff',
        fontSize: 25

    }

})