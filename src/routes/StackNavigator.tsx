import { createStackNavigator } from '@react-navigation/stack';
import { type Product } from '../interfaces/Product';
import HomeScreen from '../screens/home/HomeScreen';
import ProductScreen from '../screens/product/ProductScreen';


export type RootStackParams = {
    Inicio: undefined;
    Producto: { data: Product };
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Inicio" component={HomeScreen} />
            <Stack.Screen name="Producto" component={ProductScreen} />
        </Stack.Navigator>
    );
}