import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Desempenho() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    desempenho
                </Text>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        paddingTop: 58,
        backgroundColor: "#719257"
    },
    title: {
        fontSize: 18,
        color: "#FFF"
    }

})