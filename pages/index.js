import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <h1 className="text-3xl font-bold underline border  border-sky-500">Hello world!</h1>
      </div>
    </>
  );
}
