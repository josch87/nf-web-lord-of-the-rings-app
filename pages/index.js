import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the Rings App</title>
      </Head>
      <div>
        <h1>Lord of the Rings App</h1>
        <p>
          For an overview of the books please have a look at{" "}
          <Link href="/volumes">Volumes</Link>.
        </p>
      </div>
    </>
  );
}
