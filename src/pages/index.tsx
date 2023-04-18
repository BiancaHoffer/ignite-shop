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

interface Products {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    defaultPriceId: string;
    price: string;
  }[]
}

export default function Home({ products }: Products) {
  const { cart, addCart } = useCart();
  const [amount, setAmount] = useState(1);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  });

  function handleAddCart(product: ProductData) {
    const newProduct: NewProduct = {
      ...product,
      amount
    }

    addCart(newProduct);
    setAmount(1);
    console.log(cart)
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
                  <span>{product.price}</span>
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100), // centavos
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
