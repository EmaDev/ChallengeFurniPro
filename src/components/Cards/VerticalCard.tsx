import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { Product } from '../../interfaces/Product'
import { themeColors } from '../../theme/ThemeColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';
import { useCartStore } from '../../store/Cart';
import { CartItem } from '../../interfaces/CartItem';
import Toast from 'react-native-toast-message';


interface Props {
    data: Product;
}

export default function VerticalCard({ data }: Props) {

    const { navigate } = useNavigation<NavigationProp<RootStackParams>>();
    const addToCart = useCartStore().addToCart;


    const handleAddToCart = () => {
        const cartItem: CartItem = {
            id: data.id,
            price: data.price,
            title: data.title,
            image: data.thumbnail,
            quantity: 0
        }
        addToCart(cartItem, 1);
        return Toast.show({
            type: 'success',
            text1: `${cartItem.title} agregado al carrito`,
        });
    }
    return (
        <View className='relative mb-6'>
            <TouchableWithoutFeedback onPress={() => navigate("Producto", { data })}>
                <View className='rounded-3xl border border-gray-500 bg-white' style={{ elevation: 3 }}>
                    <Image className='h-48 w-full rounded-t-3xl' source={{ uri: data.thumbnail }} />
                    <View className='p-4'>
                        <View className='flex flex-row justify-between items-center'>
                            <Text className='text-lg font-bold'>{data.title}</Text>
                            <View className='flex flex-row items-center gap-1'>
                                <Icon.Star width={14} height={14} stroke={"orange"} />
                                <Text className='font-bold text-sm'>{data.rating}</Text>
                            </View>
                        </View>

                        <Text className="my-2">{data.description}</Text>

                        <View className='flex flex-row justify-between items-center mt-4'>
                            <Text className='text-3xl font-bold' style={{ color: themeColors.bgPrimary(1) }}>{`$${data.price}`}</Text>
                            <TouchableOpacity
                                onPress={handleAddToCart}
                                className='p-1 rounded-lg' style={{ backgroundColor: themeColors.btnColor(1), elevation: 3 }}>
                                <Icon.Plus width={28} height={28} strokeWidth={"2"} stroke={"#fff"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity className='absolute right-3 top-3 p-2 rounded-xl' style={{ backgroundColor: themeColors.btnRed(0.2) }}>
                <Icon.Heart width={20} height={20} stroke={"white"} />
            </TouchableOpacity>
        </View>
    )
}