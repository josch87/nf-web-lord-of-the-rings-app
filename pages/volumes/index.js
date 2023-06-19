import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const router = useRouter();
  const randomVolume = getRandomElement(volumes);

  function handleRandomClick(event) {
    router.push(`/volumes/${randomVolume.slug}`);
  }

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
      <button type="button" onClick={handleRandomClick}>
        Go to random volume
      </button>
    </>
  );
}
