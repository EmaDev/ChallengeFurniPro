import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Icon from "react-native-feather";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { themeColors } from '../../theme/ThemeColors';
import SliderImages from '../../components/SliderImages';
import { type RootStackParams } from '../../routes/StackNavigator';
import Counter from '../../components/Counter';
import { useCartStore } from '../../store/Cart';
import { CartItem } from '../../interfaces/CartItem';
import Toast from 'react-native-toast-message';



export default function ProductScreen() {

    const { data } = useRoute<RouteProp<RootStackParams, "Producto">>().params;
    const navigation = useNavigation();
    const [quatity, setQuantity] = useState<number>(1);
    const addToCart = useCartStore().addToCart;


    const handleAddToCart = () => {
        const cartItem: CartItem = {
            id: data.id,
            price: data.price,
            title: data.title,
            image: data.thumbnail,
            quantity: 0
        }
        addToCart(cartItem, quatity);

        return Toast.show({
            type: 'success',
            text1: `${cartItem.title} agregado al carrito`,
        });
        
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View className='relative'>
                <SliderImages images={data.images} />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='absolute top-4 left-2 w-10 h-10 rounded-full bg-white items-center justify-center'>
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgSecondary(1)} />
                </TouchableOpacity>
            </View>
            <View className='w-full mb-4 rounded-full' style={{ backgroundColor: "rgba(0,0,0,0.1)", height: 1, elevation: 3 }}></View>
            <View className='p-4'>
                <View className='flex flex-row justify-between items-center mb-2'>
                    <Text className='text-3xl font-bold'>{data.title}</Text>
                    <TouchableOpacity className='bg-red-200 p-2 rounded-xl'>
                        <Icon.Heart strokeWidth={3} stroke={"white"} width={18} height={18} />
                    </TouchableOpacity>
                </View>


                <Text className='my-4 text-lg'>{data.description}</Text>

                <View className='flex flex-row'>
                    <KeyValueItem name="Marca" value={data.brand} />
                    <KeyValueItem name="Categoria" value={data.category} />

                </View>
            </View>

            <View className='p-4  flex-row justify-between items-center'>
                <Counter value={quatity} setValue={setQuantity} />
                <Text className='text-4xl font-bold'>{`$${data.price}`}</Text>
            </View>
            <TouchableOpacity
                onPress={handleAddToCart}
                className='w-4/5 m-auto my-6 p-4 rounded-xl' style={{ backgroundColor: themeColors.bgSecondary(1), elevation: 3 }}>
                <Text className='text-center font-bold text-2xl text-white'>Agregar al carrito</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


interface PropsKeyValueItem {
    name: string;
    value: any;
}
const KeyValueItem = ({ name, value }: PropsKeyValueItem) => {
    return (
        <View className='m-2'>
            <Text className='font-bold text-gray-400 mb-1 text-md'>{name}</Text>
            <View className='p-2 rounded-lg' style={{ backgroundColor: themeColors.bgSecondary(0.4), alignSelf: "flex-start" }}>
                <Text className='font-bold text-xs' style={{ color: themeColors.bgSecondary(1) }}>{value}</Text>
            </View>
        </View>
    )
}