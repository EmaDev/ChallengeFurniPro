import { View, Text, FlatList, Dimensions, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme/ThemeColors'


interface Props {
    images: string[]
}

const widthScreen = Dimensions.get("window").width;

export default function SliderImages({ images }: Props) {


    const [activeIndex, setActiveIndex] = useState<number>(0);
    const renderImageItem = (item: string, index: number) => {
        return (
            <View className='rounded-xl'>
                <Image source={{ uri: item }} className='h-72' style={{ width: widthScreen, objectFit: "contain" }} />
            </View>
        )
    }


    const renderDotIdicator = () => {
        return images.map((img, i) => (
            <View key={i} className='w-4 h-2 rounded-full'

                style={{ backgroundColor: i === activeIndex ? themeColors.bgSecondary(1) : themeColors.bgSecondary(0.4) }}>

            </View>
        ))
    }

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.ceil(scrollPosition / widthScreen);

        setActiveIndex(index);
    }

    return (
        <View className='relative'>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderImageItem(item, index)}
                onScroll={handleScroll}
                pagingEnabled={true}
                style={{backgroundColor: themeColors.bgPrimary(1)}}
            />
            <View className='flex flex-row justify-center gap-2 absolute bottom-2 w-full'>
                {renderDotIdicator()}
            </View>
        </View>
    )
}