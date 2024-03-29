import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "react-native-feather";
import CartScreen from '../screens/cart/CartScreen';
import { themeColors } from '../theme/ThemeColors';
import { StackNavigator } from './StackNavigator';
import { useCartStore } from '../store/Cart';


export type RootBottomTabsParams = {
    home: undefined;
    carrito: undefined;
    //TODO: favorites: undefined; 
}

const Tab = createBottomTabNavigator<RootBottomTabsParams>();


export const BottomTabNavigator = () => {

    const cartSize = useCartStore(state => state.size);

    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: themeColors.bgPrimary(1),
                    borderRadius: 12,
                    paddingHorizontal: 32,
                    position: 'relative',
                    height: 60
                }
            }}
        >
            <Tab.Screen name="home" component={StackNavigator} options={{
                tabBarIcon: ({ focused }) => (

                    <View className='w-16 h-16 rounded-full justify-center items-center absolute -top-4'
                        style={{ backgroundColor: focused ? themeColors.bgSecondary(1) : themeColors.bgSecondary(1) }}>
                        <Icon.Home width={24} height={24} stroke={focused ? "white" : themeColors.bgPrimary(0.6)} />
                    </View>
                )
            }} />

            <Tab.Screen name="carrito" component={CartScreen} options={{
                tabBarIcon: ({ focused }) => (

                    <View className='w-16 h-16 absolute -top-4'>
                        <View className='w-full h-full rounded-full justify-center items-center relative'
                            style={{ backgroundColor: focused ? themeColors.bgSecondary(1) : themeColors.bgSecondary(1) }}>

                            <Icon.ShoppingCart
                                width={24} height={24} stroke={focused ? "white" : themeColors.bgPrimary(0.6)} ></Icon.ShoppingCart>
                            {cartSize > 0 &&
                                <Text
                                    style={{ backgroundColor: themeColors.btnRed(0.9) }}
                                    className='absolute -top-1 -right-1 p-2 rounded-full h-8 w-8 text-white text-center'>
                                    {cartSize}
                                </Text>
                            }
                        </View>
                    </View>
                )
            }} />


        </Tab.Navigator>
    );
}