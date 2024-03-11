import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function exercicios() {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            < ScrollView >
                <View style={ESTILO.header}>

                    <Text style={ESTILO.title}>
                    </Text>
                </View>
                <View style={ESTILO.main}>
                    <View style={ESTILO.alzhaimer}>
                        <Image source={require("../assets/exerAlzhei.png")} style={ESTILO.alzhei} />
                    </View>
                    <View style={ESTILO.avc}>
                        <Image source={require("../assets/avc.png")} style={ESTILO.avcImag} />
                    </View>
                    <View style={ESTILO.esquizo}>
                        <Image source={require("../assets/exerAlzhei.png")} style={ESTILO.esqui} />
                    </View>
                    <View style={ESTILO.parkinson}>
                        <Image source={require("../assets/exerAlzhei.png")} style={ESTILO.logo} />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 28,
        backgroundColor: "#cfb9e5"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    alzhei: {
        width: 60,
        height: 60
    },
    avcImg: {
        width: 60,
        height: 60
    },
    esqui: {
        width: 60,
        height: 60
    },

    alzhaimer: {
        backgroundColor: "#cfb9e5",
        height: 111,
        width: 288,
        borderRadius: 25,
        marginTop: 45
    },
    avc: {
        backgroundColor: "#7485BF",
        height: 111,
        width: 288,
        borderRadius: 25
    },
    esquizo: {
        backgroundColor: "#719257",
        height: 111,
        width: 288,
        borderRadius: 25
    },
    parkinson: {
        backgroundColor: "#E1374C",
        height: 111,
        width: 288,
        borderRadius: 25
    },

    main: {
        gap: 42,
        alignItems: "center",
        overflow: "scroll"
    }

})

