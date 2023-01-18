import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}
