import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Stripe from "stripe";

interface Item {
  customerName: string;
  productsImages: string[];
}

export default function Success({ customerName, productsImages }: Item) {
  console.log(customerName, productsImages);

  return (
    <>
      <Head>
        <title>Sucesso | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada com sucesso!</h1>

        <div className="container-images">
          {productsImages.map((image, index) => {
            return (
              <ImageContainer key={index}>
                <Image src={image} width={120} height={110} alt="imagem do produto" />
              </ImageContainer>
            )
          })}
        </div>

        <p>Uhul, {customerName}, {productsImages.length === 1 ? "seu item" : "seus itens"} {productsImages.length === 1 ? "já está" : "já estão"} a caminho da sua casa 😎. </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })


  const customerName = session.customer_details?.name;
  const productsImages = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product;
    return product.images[0];
  })

  return {
    props: {
      customerName,
      productsImages,
    }
  }
}