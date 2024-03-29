import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { Product } from '../../interfaces/Product'
import { themeColors } from '../../theme/ThemeColors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

interface Props {
    data: Product;
}
export default function HorizontalCard({ data }: Props) {

    const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View className='relative mr-6'>
            <TouchableWithoutFeedback onPress={() => navigate("Producto", { data })}>
                <View className='rounded-3xl border border-gray-500 bg-white' style={{ elevation: 3 }}>
                    <Image className='h-36 w-64 rounded-t-3xl' source={{ uri: data.thumbnail }} />
                    <View className='p-4'>
                        <View className='flex flex-row justify-between items-center'>
                            <Text className='text-lg font-bold w-48'>{data.title}</Text>

                        </View>

                        <Text className="my-2 w-48">{data.description.slice(0, 48) + "..."}</Text>

                        <View className='flex flex-row justify-between items-center'>
                            <View className='flex flex-row items-center gap-1'>
                                <Icon.Star width={14} height={14} stroke={"yellow"} />
                                <Text className='font-bold text-sm'>{data.rating}</Text>
                            </View>
                            <Text className='text-xl font-bold'>{`$ ${data.price}`}</Text>
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