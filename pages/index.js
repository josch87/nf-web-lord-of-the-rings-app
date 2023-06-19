import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings App</h1>
      <p>
        For an overview of the books please have a look at{" "}
        <Link href="/volumes">Volumes</Link>.
      </p>
    </div>
  );
}
