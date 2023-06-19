import Link from "next/link";
import { volumes } from "../../lib/data";
import { Fragment } from "react";

export default function TheFellowshopOfTheRings() {
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
    </>
  );
}
