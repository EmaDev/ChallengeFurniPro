import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { LIST_PRODUCTS } from '../../mock'
import { Product } from '../../interfaces/Product'
import VerticalCard from './VerticalCard'
import useProducts from '../../hooks/useProducts'


export default function VerticalListCard() {

    const { allProducts } = useProducts();

    return (
        <View className='mt-5'>
            <View className='mx-4 flex flex-row justify-between items-center'>
                <Text className='font-bold text-2xl my-2'>Todos los productos</Text>
            </View>

            <View
                className='px-4'
            >
                {allProducts.map((prod, i) => (
                    <VerticalCard key={prod.id + i} data={prod} />
                ))}
            </View>

        </View>
    )
}