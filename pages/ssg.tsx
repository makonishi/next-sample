import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
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
      </main>
    </div>
  )
}

export default SSG