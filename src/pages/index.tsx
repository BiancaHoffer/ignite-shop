import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';

import { stripe } from '../lib/stripe';
import Stripe from 'stripe';

import { NewProduct, ProductData } from '../@types/product';

import { useCart } from '../hooks/useCart';

import { HomeContainer, Product } from '../styles/pages/home';
import { formatPrice } from '../utils/formatPrice';

interface Products {
  products: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    defaultPriceId: string;
    price: number;
  }[]
}

export default function Home({ products }: Products) {
  const { addCart } = useCart();
  const [amount, setAmount] = useState(1);

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 100px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 720px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 900px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  function handleAddCart(product: ProductData) {
    const newProduct: NewProduct = {
      ...product,
      amount
    }

    addCart(newProduct);
    setAmount(1);
    console.log(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => {
          return (
            <Product
              className='keen-slider__slide'
              key={product.id}
            >
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </div>

                <button onClick={() => handleAddCart(product)}>
                  <Image src='/cart.svg' width={32} height={32} alt='' />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      defaultPriceId: price.id,
      price: price.unit_amount! / 100 // cents
    }
  })

  return {
    props: {
      products
    },
    revalidate: 1,
  }
}
