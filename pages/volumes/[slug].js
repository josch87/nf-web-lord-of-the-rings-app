import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeData = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const previousVolumeSlug = volumes[volumeIndex - 1];
  const nextVolumeSlug = volumes[volumeIndex + 1];

  let seperator = "";
  if (previousVolumeSlug != null && nextVolumeSlug != null) {
    seperator = " | ";
  }

  if (!volumeData) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{volumeData.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => {
          return (
            <Fragment key={book.ordinal}>
              <li>
                {book.ordinal}: {book.title}
              </li>
            </Fragment>
          );
        })}
      </ul>
      <Image
        src={volumeData.cover}
        height={230}
        width={140}
        alt={"Cover of " + volumeData.title}
      />
      <br />
      {previousVolumeSlug ? (
        <Link
          href={`/volumes/${previousVolumeSlug.slug}`}
          title={previousVolumeSlug.title}
        >
          Previous
        </Link>
      ) : null}
      {seperator}
      {nextVolumeSlug ? (
        <Link
          href={`/volumes/${nextVolumeSlug.slug}`}
          title={nextVolumeSlug.title}
        >
          Next
        </Link>
      ) : null}
    </>
  );
}
