
import { ScrollView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function GuiaJogos() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={ESTILO.header}>
                    <Text style={ESTILO.title}>
                        Guia de Jogos
                    </Text>
                </View>
                <View style={ESTILO.main}>

                    <TouchableOpacity style={ESTILO.alzheimer}>
                        <View style={ESTILO.alzheimerTexto}>
                            <Text style={ESTILO.titulo}>
                                Alzheimer
                            </Text>
                            <Text style={ESTILO.subtitulo}>
                                Exercite-se
                            </Text>
                        </View>
                        <Image source={require("../assets/exerAlzhei.png")} style={ESTILO.alzheimerImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={ESTILO.avc} >
                        <View style={ESTILO.avcTexto}>
                            <Text style={ESTILO.titulo}>
                                AVC
                            </Text>
                            <Text style={ESTILO.subtitulo}>
                                Exercite-se
                            </Text>
                        </View>
                        <Image source={require("../assets/avc.png")} style={ESTILO.avcImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={ESTILO.esquizofrenia}>
                        <View style={ESTILO.esquizofreniaTexto}>
                            <Text style={ESTILO.titulo}>
                                Esquizofrenia
                            </Text>
                            <Text style={ESTILO.subtitulo}>
                                Exercite-se
                            </Text>
                        </View>
                        <Image source={require("../assets/esqui.png")} style={ESTILO.esquizofreniaImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={ESTILO.parkinson}>
                        <View style={ESTILO.parkinsonTexto}>
                            <Text style={ESTILO.titulo}>
                                Parkinson
                            </Text>
                            <Text style={ESTILO.subtitulo}>
                                Exercite-se
                            </Text>
                        </View>
                        <Image source={require("../assets/malParkinson.png")} style={ESTILO.parkinsonImg} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#e13746"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    main: {
        marginTop: 42,
        marginBottom: 42,
        gap: 42,
        alignItems: "center"
    },
    alzheimer: {
        width: 288,
        height: 104,
        borderRadius: 35,
        backgroundColor: "#CFB9E5",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    avc: {
        width: 288,
        height: 104,
        borderRadius: 35,
        backgroundColor: "#7485BF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
        
    },
    esquizofrenia: {
        width: 288,
        height: 104,
        borderRadius: 35,
        backgroundColor: "#719257",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    parkinson: {
        width: 288,
        height: 104,
        borderRadius: 35,
        backgroundColor: "#E1374C",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    alzheimerImg: {
        width: 101,
        height: 87
    },
    avcImg: {
        width: 82,
        height: 74
    },
    esquizofreniaImg: {
        width: 71,
        height: 70
    },
    parkinsonImg: {
        width: 90,
        height: 91
    }

})