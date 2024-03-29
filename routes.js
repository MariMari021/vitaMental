import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home'
import { GuiaExercicios } from './pages/guiaExercicios'
import { GuiaJogos } from './pages/guiaJogos'
import { Instituicoes } from './pages/instituicoes'
import { Ionicons } from '@expo/vector-icons/'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="guiaExercicios"
                component={GuiaExercicios}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="book" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="book-outline" />)
                    }
                }}
            />
             <Tab.Screen
                name="guiaJogos"
                component={GuiaJogos}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="game-controller" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="game-controller-outline" />)
                    }
                }}
            />
              <Tab.Screen
                name="PageExercicios"
                component={PageExercicios}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="analytics" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="analytics-outline" />)
                    }
                }}
            />
             <Tab.Screen
                name="instituicoes"
                component={Instituicoes}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="people" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="people-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}

