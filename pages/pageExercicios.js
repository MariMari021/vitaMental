import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PageExercicios() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Feb 2024
                </Text>
            </View>

            <View style={ESTILO.main}>
                <View style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <View>{text}</View>
                    <Image src={imageUrl} alt="" style={{ width: '100px', height: '100px', marginLeft: '20px' }} />

                </View>
                <Text>Exercícios</Text>

            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#3C4146",
        flex: 1

    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },

    main: {
        padding: 14,
        paddingTop: 58,
        flex: 1
    }
})
