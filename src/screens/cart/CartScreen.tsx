import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useCartStore } from '../../store/Cart'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme/ThemeColors';
import { CartItem } from '../../interfaces/CartItem';
import Toast from 'react-native-toast-message';

export default function CartScreen() {

    const navigation = useNavigation();
    const items = useCartStore(state => state.items);
    const total = useCartStore(state => state.total);
    const removeFromCart = useCartStore(state => state.removeFromCart);


    const handleRemoveFromCart = (id: number) => {
        removeFromCart(id);
        return Toast.show({
            type: 'info',
            text1: 'Articulo eliminado del carrito',
        });
    }
    const renderItem = (item: CartItem) => {
        return (
            <View className='mx-4 my-2 p-4 rounded-lg flex flex-row items-center justify-center' style={{ elevation: 3, backgroundColor: "white" }}>
                <View className='w-[20%]'>
                    <Image className='h-14 w-14 rounded-lg' source={{ uri: item.image }} />
                </View>
                <View className='w-[70%] pl-2'>
                    <Text className='text-md font-semibold'><Text className='font-bold'>{item.quantity}x |</Text> {item.title}</Text>
                    <Text className='text-xl'>{`$ ${item.price}`}</Text>
                </View>
                <View className='w-[10%]'>
                    <TouchableOpacity
                        onPress={() => handleRemoveFromCart(item.id)}
                        className='h-8 w-8 rounded-full items-center justify-center' style={{ backgroundColor: themeColors.btnRed(0.2) }}>
                        <Icon.Trash width={16} height={16} stroke={themeColors.btnRed(1)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingBottom: 12 }}>
            <View className='flex flex-row justify-between items-center mt-4 px-4'>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='h-12 w-12 rounded-full bg-white items-center justify-center'>
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgSecondary(1)} />
                </TouchableOpacity>
            </View>

            <View className='h-[90%] w-full'>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => renderItem(item)}
                        ListHeaderComponent={<HeaderListCart />}
                        ListFooterComponent={<FooterListCart totalCart={total} />}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

const HeaderListCart = () => {
    return (
        <View className='w-4/5 m-auto my-4'>
            <Text className='text-2xl font-bold'>Tu Carrito</Text>
        </View>
    )
}


interface FooterListProps {
    totalCart: number;
}
const FooterListCart = ({ totalCart }: FooterListProps) => {

    if (totalCart == 0) {
        return (
            <View className='w-4/5 m-auto my-4'>
                <Text className='text-center p-4 rounded-xl font-bold text-lg'
                    style={{ backgroundColor: themeColors.btnRed(0.4), color: themeColors.btnRed(1) }}
                >El carrito esta vacio</Text>
            </View>
        )
    }
    return (
        <View className='w-4/5 m-auto'>
            <View className='w-full my-4 rounded-full' style={{ backgroundColor: "rgba(0,0,0,0.1)", height: 1 }}></View>

            <View className='flex flex-row items-center justify-between'>
                <Text className='text-xl font-bold'>Total</Text>
                <Text className='text-xl font-bold'>{`$${totalCart}`}</Text>
            </View>

            <TouchableOpacity className='w-full my-6 p-4 rounded-xl' style={{ backgroundColor: themeColors.bgSecondary(1), elevation: 3 }}>
                <Text className='text-center font-bold text-2xl text-white'>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}