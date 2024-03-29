import { SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react'
import useProducts from '../../hooks/useProducts'
import VerticalListCard from '../../components/Cards/VerticalListCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { CategoryListCard } from '../../components/Cards/CategoryListCard';

export default function HomeScreen() {

    const { isLoading } = useProducts();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                    marginBottom: 70
                }}
            >
                <Header />
                <SearchBar/>
                {isLoading ?
                    <ActivityIndicator />
                    :
                    <>
                        <CategoryListCard />

                        <VerticalListCard />
                    </>
                }
            </ScrollView>
        </SafeAreaView>
    )
}