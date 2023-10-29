import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
  message: string
}

// getStaticPropsが返したpropsをSSGは受け取る
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          This Page is a page generated at build time by ssg.
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)
  return {
    props: {
      message,
    }
  }
}

export default SSG
