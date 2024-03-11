import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
            <View>
                button
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
        fontStyle: 'bold',

    },
    subtitulo: {
        color: '#D2CDCD',
        fontSize: 18,
        marginLeft: 50
    },
    interImg: {
        paddingTop: 20,
        alignItems:'center'
    },
    imgInter: {
        height: 250,
        width: 250
    }


})