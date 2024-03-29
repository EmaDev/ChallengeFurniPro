import { useEffect, useState } from 'react'
import { getProductsByTitle } from '../api/products';
import { DummyApiAdapter } from '../config/adapters/DummyApiAdapter';
import { Product } from '../interfaces/Product';

export default function useSearch() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productsByTitle, setProductsByTilte] = useState<Product[]>([]);

  const loadProductsByTitle = async (title: string) => {
    setIsLoading(true);

    if (title.length <= 3) {
      setProductsByTilte([]);
    } else {
      setProductsByTilte(await getProductsByTitle(DummyApiAdapter, title));
    }
    setIsLoading(false);

  }

  return { isLoading, productsByTitle, loadProductsByTitle }
}