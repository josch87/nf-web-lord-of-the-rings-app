import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { Fragment } from "react";

export default function TheTwoTowers() {
  const volumeData = volumes.find(({ slug }) => slug === "the-two-towers");

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
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The Two Towers"
      />
      <br />
      <Link
        href="/volumes/the-fellowship-of-the-ring"
        title="The Fellowship of the Ring"
      >
        Previous
      </Link>
      {" / "}
      <Link
        href="/volumes/the-return-of-the-king"
        title="The Return of the King"
      >
        Next
      </Link>
    </>
  );
}
