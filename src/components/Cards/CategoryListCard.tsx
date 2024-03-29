import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import HorizontalCard from './HorizontalCard'
import { CategoriesButtons } from '../CategoriesButtons'
import useProducts from '../../hooks/useProducts'
import { customFonts } from '../../theme/customFonts'

export const CategoryListCard = () => {

    const { allCategories, productsByCategory, activeCategory, loadProductsByCategory} = useProducts();
    
    return (
        <View className=''>
            <CategoriesButtons categories={allCategories} active={activeCategory} load={loadProductsByCategory}/>

            <View className='mx-4 flex flex-row justify-between items-center'>
                <Text className='font-bold text-2xl my-2'>{activeCategory}</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}

                data={productsByCategory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HorizontalCard data={item} />}
            />

        </View>
    )
}
