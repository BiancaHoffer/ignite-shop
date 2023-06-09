import { NewProduct, ProductData } from "@/src/@types/product"
import { useCart } from "@/src/hooks/useCart"
import { stripe } from "@/src/lib/stripe"
import { DetailsContainer, ImageContainer, ProductContainer } from "@/src/styles/pages/product"
import { formatPrice } from "@/src/utils/formatPrice"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"

interface ProductProps {
  product: ProductData;
}

export default function Product({ product }: ProductProps) {
  const { addCart } = useCart()

  const [redirectCheckout, setRedirectCheckout] = useState(false);
  const [amount, setAmount] = useState(1);
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <h1>Carregando...</h1>
    )
  }

  function handleAddCart(product: ProductData) {
    const newProduct: NewProduct = {
      ...product,
      amount
    }

    addCart(newProduct);
    setAmount(1);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <div className="container-image">
          <ImageContainer>
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt={product.name}
            />
          </ImageContainer>
        </div>
        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price)}</span>
          <p>{product.description}</p>
          <button
            onClick={() => handleAddCart(product)}
            disabled={redirectCheckout}
          >
            Adicionar no carrinho
          </button>
        </DetailsContainer>
      </ProductContainer >
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const response = await stripe.products.list()

  const paths = response.data.map(i => {
    return {
      params: {
        id: i.id
      }
    }
  })

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const { id } = params || {};

  const response = await stripe.products.retrieve(id!, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    description: response.description,
    defaultPriceId: price.id,
    price: price.unit_amount! / 100, // centavos
  }

  return {
    props: {
      product
    },

    revalidate: 60 * 60 * 2
  }
}

