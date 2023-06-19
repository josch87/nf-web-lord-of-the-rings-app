import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { Fragment } from "react";

export default function TheFellowshipOfTheRing() {
  const volumeData = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
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
        src="/images/the-fellowship-of-the-ring.png"
        height={931}
        width={574}
        alt="The Fellowship of the Ring"
      />
      <br />
      <Link href="/volumes/the-two-towers" title="The Two Towers">
        Next
      </Link>
    </>
  );
}
