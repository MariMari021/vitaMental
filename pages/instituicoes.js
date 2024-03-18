import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons/'


export function instituicoes() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
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
                    <View style={ESTILO.divInstituicoes}>
                        <View>
                            <View style={ESTILO.listaTitulosInstituicoes}>
                                <View style={ESTILO.numInstituicoes}>
                                    <Text style={ESTILO.numerosInstituicoes}>
                                        1
                                    </Text>
                                </View>
                                <View style={ESTILO.linksInstituicoes}>
                                    <Text style={ESTILO.nomeLinkInstituicoes}>
                                        www.google.com
                                    </Text>
                                </View>
                            </View>
                            <View style={ESTILO.conteudoInstituicoes}>
                                <Text style={ESTILO.textoInstituicoes}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={ESTILO.divInstituicoes}>
                        <View>
                            <View style={ESTILO.listaTitulosInstituicoes}>
                                <View style={ESTILO.numInstituicoes}>
                                    <Text style={ESTILO.numerosInstituicoes}>
                                        2
                                    </Text>
                                </View>
                                <View style={ESTILO.linksInstituicoes}>
                                    <Text style={ESTILO.nomeLinkInstituicoes}>
                                        www.google.com
                                    </Text>
                                </View>
                            </View>
                            <View style={ESTILO.conteudoInstituicoes}>
                                <Text style={ESTILO.textoInstituicoes}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={ESTILO.divInstituicoes}>
                        <View>
                            <View style={ESTILO.listaTitulosInstituicoes}>
                                <View style={ESTILO.numInstituicoes}>
                                    <Text style={ESTILO.numerosInstituicoes}>
                                        3
                                    </Text>
                                </View>
                                <View style={ESTILO.linksInstituicoes}>
                                    <Text style={ESTILO.nomeLinkInstituicoes}>
                                        www.google.com
                                    </Text>
                                </View>
                            </View>
                            <View style={ESTILO.conteudoInstituicoes}>
                                <Text style={ESTILO.textoInstituicoes}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={ESTILO.divInstituicoes}>
                        <View>
                            <View style={ESTILO.listaTitulosInstituicoes}>
                                <View style={ESTILO.numInstituicoes}>
                                    <Text style={ESTILO.numerosInstituicoes}>
                                        4
                                    </Text>
                                </View>
                                <View style={ESTILO.linksInstituicoes}>
                                    <Text style={ESTILO.nomeLinkInstituicoes}>
                                        www.google.com
                                    </Text>
                                </View>
                            </View>
                            <View style={ESTILO.conteudoInstituicoes}>
                                <Text style={ESTILO.textoInstituicoes}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={ESTILO.espaçoInstituicoes}></View>
                </View>
            </ScrollView>
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
        marginTop: 30
    },
    tituloInstituições: {
        fontSize: 23,
        fontWeight: 500,
        color: '3C4146'
    },
    subtituloInstituicoes: {
        fontSize: 18,
        color: '#292828'
    },
    divInstituicoes: {
        marginTop: 30
    },
    listaTitulosInstituicoes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    numInstituicoes: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18%',
        height: 45,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginRight: 15
    },
    numerosInstituicoes: {
        fontSize: 22,
        color: '#3C4146',
        fontWeight: 600
    },
    linksInstituicoes: {
        backgroundColor: '#3C4146',
        width: '75%',
        height: 38,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nomeLinkInstituicoes: {
        color: '#fff',
        fontSize: 16
    },
    conteudoInstituicoes: {
        marginTop: 25,
        backgroundColor: '#00000044',
        borderRadius: 20,
        padding: 20
    },
    textoInstituicoes: {
        fontSize: 13
    },
    espaçoInstituicoes: {
        height: 52
    }
})