import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme/ThemeColors';


interface Props {
    value: number;
    setValue: (val:number) => void;
}
export default function Counter({value, setValue}:Props) {
    
    return (
        <View className='p-1 rounded-xl flex flex-row flex' style={{ alignSelf: "flex-start", backgroundColor: themeColors.btnColor(0.4)}}>
            <TouchableOpacity 
            onPress={() => setValue( value == 1 ? value : value - 1)}
            className='w-10 h-10 bg-red-300 rounded-xl justify-center items-center'
            style={{backgroundColor: themeColors.btnColor(1)}}>
                <Icon.Minus width={22} height={22} strokeWidth={3} color={"#fff"} />
            </TouchableOpacity>
            <TextInput
                className='m-0 p-0 text-center w-12 font-bold text-xl'
                value={value.toString()}
                onChangeText={(val) => setValue( val == "" ? 1 : parseInt(val))}
                keyboardType={"number-pad"}
            />
            <TouchableOpacity 
            onPress={() => setValue( value + 1)}
            className='w-10 h-10 bg-red-300 rounded-xl justify-center items-center'
            style={{backgroundColor: themeColors.btnColor(1)}}>
                <Icon.Plus width={22} height={22} strokeWidth={3} color={"#fff"} />
            </TouchableOpacity>
        </View>
    )
}