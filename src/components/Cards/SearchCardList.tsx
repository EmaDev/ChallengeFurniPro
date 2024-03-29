import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import HorizontalCard from './HorizontalCard';
import { Product } from '../../interfaces/Product';

interface Props {
    isLoading: boolean;
    products: Product[];
    term: string;
}
export default function SearchCardList({ isLoading, products, term }: Props) {

    if (isLoading) {
        return (
            <ActivityIndicator />
        )
    }

    return (
        <View>
            { (term.length > 3) && <Text className='mx-8 py-2'>Resultados para: <Text className='font-semibold'>{term}</Text>..</Text>}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HorizontalCard data={item} />}
            />
        </View>
    )
}