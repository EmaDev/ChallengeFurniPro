import { View, Text, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme/ThemeColors'
import { customFonts } from '../theme/customFonts';

export default function Header() {
    return (
        <View className='w-full h-48 relative overflow-hidden flex justify-center' style={{ backgroundColor: themeColors.bgPrimary(1) }}>
            <Image
                source={require("../assets/logo-white.png")}
                style={{ width: 220, height: 220, opacity: 0.1 }}
                className='absolute -bottom-6 -right-6'
            />

            <View className='flex items-center'>
                <View className='h-20 w-20 rounded-full flex justify-center items-center' style={{ backgroundColor: themeColors.bgSecondary(0.5) }}>
                    <Image
                        style={{}}
                        source={require("../assets/logo.png")}
                        className='w-24 h-24'
                    />
                </View>
                <Text
                    style={customFonts.extraBold}
                    className='text-center text-6xl text-white'>FurniPro</Text>
            </View>
        </View>
    )
}