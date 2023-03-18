import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessData {
  successData: {
    customerName: string;
    name: string;
    imageUrl: string;
  }
}

export default function Success({ successData }: SuccessData) {
  return (
    <>
      <Head>
        <title>Sucesso | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada com sucesso!</h1>

        <ImageContainer>
          <Image src={successData.imageUrl} width={120} height={110} alt={successData.name} />
        </ImageContainer>

        <p>Uhul <strong>{successData.customerName}</strong>, seu item <strong>{successData.name}</strong> já está a caminho da sua casa 😎. </p>

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
  const product = session.line_items?.data[0]

  const successData = {
    customerName,
    name: product?.description,
    imageUrl: product?.price?.product.images[0],
  }

  console.log(successData)

  return {
    props: {
      successData
    }
  }
}