import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Head from "next/head";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
