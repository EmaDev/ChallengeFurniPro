import { View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Icon from "react-native-feather";
import SearchCardList from './Cards/SearchCardList';
import useSearch from '../hooks/useSearch';

export default function SearchBar() {

    const [term, setTerm] = useState<string>("");
    const { loadProductsByTitle, isLoading, productsByTitle } = useSearch();

    useEffect(() => {
        loadProductsByTitle(term);
    }, [term])
    return (
        <>
            <View className='mt-4 flex-row items-center space-x-2 px-4 pb-2' >
                <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300 bg-white'>
                    <Icon.Search width={"25"} height={"25"} stroke={"grey"} />

                    <TextInput
                        placeholder='Buscar un producto'
                        className='ml-2 flex-1 p-0'
                        value={term}
                        onChangeText={setTerm}
                    />
                </View>
            </View>
            <SearchCardList isLoading={isLoading} products={productsByTitle} term={term}/>
        </>
    )
}