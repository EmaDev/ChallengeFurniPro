import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme/ThemeColors'
import { Category } from '../interfaces/Category'
import useProducts from '../hooks/useProducts';
import { customFonts } from '../theme/customFonts';


interface Props {
    categories: Category[];
    active: Category;
    load: (category:Category) => void;

}
export const CategoriesButtons = ({ categories, active, load}: Props) => {

    return (
        <View className='mt-4 px-6'>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                className='overflow-visible'
                contentContainerStyle={{
                    paddingVertical: 12
                }}
            >
                {
                    categories.map(category => (
                        <View key={category} className='flex justify-center mr-2'
                        >
                            <TouchableOpacity
                                onPress={() => load(category)}
                                className='rounded-full p-4'
                                style={{
                                    backgroundColor: active == category ? themeColors.btnColor(1) : themeColors.btnColor(0.5),
                                }}>
                                <Text className='text-lg'
                                style={[{color: active == category ? "#fff" :  themeColors.btnColor(1)}, customFonts.extraBold]}
                                >{category}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
