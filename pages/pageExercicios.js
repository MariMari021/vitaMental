import { ScrollView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"

export function PageExercicios() {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={ESTILO.header}>
                    <Text style={ESTILO.title}>
                        feb 2024
                    </Text>
                </View>
                <View style={ESTILO.main}>
                    <View style={ESTILO.alzheimer}>
                        <View style={ESTILO.alzheimerTexto}>
                            <Text style={ESTILO.titulo}>
                                Alzheimer
                            </Text>
                            <Text style={ESTILO.subtitulo}>
                                Exercite-se
                            </Text>
                        </View>
                        <Image source={require("../assets/alzheimerImg.png")} style={ESTILO.alzheimerImg} />
                    </View>
                   
                        <Text style={ESTILO.exercicio}>Exercícios</Text>
                    
                    <View style={ESTILO.avc} >
                        <LinearGradient colors={["#4970F4", "#ffff"]} style={[StyleSheet.background, ESTILO.teste]} >
                            <View style={ESTILO.avcTexto}>
                                <View style={ESTILO.sol}>
                                    <Text style={ESTILO.titulo}>
                                        Matutino
                                    </Text>
                                    <Image source={require("../assets/iconeManha.png")} style={ESTILO.solImg} />
                                </View>
                                <Text style={ESTILO.subtitulo}>
                                    Acesse os exercícios indicados para manhã
                                </Text>

                            </View>
                            <Image source={require("../assets/exercitando.png")} style={ESTILO.avcImg} />
                        </LinearGradient>
                    </View>
                    <View style={ESTILO.esquizofrenia}>
                        <LinearGradient colors={["#4970F4", "#F9E291"]} style={[StyleSheet.background, ESTILO.teste]} >
                            <View style={ESTILO.esquizofreniaTexto}>
                                <Text style={ESTILO.titulo}>
                                    Vespertino
                                </Text>
                                <Image source={require("../assets/iconeTarde.png")} style={ESTILO.solImg} />
                                <Text style={ESTILO.subtitulo}>
                                    Acesse os exercícios indicados para a tarde
                                </Text>
                            </View>
                            <Image source={require("../assets/mulherCorrendo.png")} style={ESTILO.esquizofreniaImg} />
                        </LinearGradient>
                    </View>

                    <View style={ESTILO.parkinson}>
                        <LinearGradient colors={["#4970F4", "#9D9D9D"]} style={[StyleSheet.background, ESTILO.teste]} >
                            <View style={ESTILO.parkinsonTexto}>
                                <Text style={ESTILO.titulo}>
                                    Noturno
                                </Text>
                                <Image source={require("../assets/iconeNoite.png")} style={ESTILO.solImg} />
                                <Text style={ESTILO.subtitulo}>
                                    Acesse os exercícios indicados para noite
                                </Text>
                            </View>
                            <Image source={require("../assets/mulherAlongando.png")} style={ESTILO.parkinsonImg} />
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const ESTILO = StyleSheet.create({

    header: {
        paddingTop: 55,
        backgroundColor: '#3C4146'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
        display: "flex",
        paddingLeft: 40
    },
    alzheimer: {
        width: 320,
        height: 124,
        borderRadius: 35,
        backgroundColor: "#CFB9E5",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    main: {
        paddingTop: 50,
        gap: 42,
        alignItems: "center",
        backgroundColor: '#3C4146',
        height: 780
    },
    alzheimerImg: {
        width: 93,
        height: 87
    },
    avc: {
        width: 300,
        height: 124,
        borderRadius: 35,
        backgroundColor: "#7485BF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    teste: {
        width: 300,
        height: 124,
        borderRadius: 35,
        backgroundColor: "#7485BF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    esquizofrenia: {
        width: 288,
        height: 124,
        borderRadius: 35,
        backgroundColor: "#719257",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    parkinson: {
        width: 288,
        height: 124,
        borderRadius: 35,
        backgroundColor: "#E1374C",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    avcImg: {
        width: 95,
        height: 80
    },

    esquizofreniaImg: {
        width: 83,
        height: 91
    },
    parkinsonImg: {
        width: 110,
        height: 100
    },
    subtitulo: {
        width: 150,
    },
    sol: {
        display: "flex"
    },
    exercicio: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
        display: "flex",
        paddingRight: 230
    }

})
