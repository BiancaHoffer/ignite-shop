import { stripe } from "@/src/lib/stripe"
import { DetailsContainer, ImageContainer, ProductContainer } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
}

interface teste {
  product: ProductProps;
}

export default function Product({ product }: teste) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
        />
      </ImageContainer>

      <DetailsContainer>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </DetailsContainer>
    </ProductContainer>
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
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount! / 100), // centavos
  }

  return {
    props: {
      product
    },

    revalidate: 60 * 60 * 2
  }
}

