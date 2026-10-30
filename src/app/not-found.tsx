import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-ink px-6 pt-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-5 text-6xl text-ivory sm:text-7xl">
        This page has <em className="italic text-brass-light">drifted</em>
      </h1>
      <p className="justify-center-last mt-6 max-w-md text-[15.5px] leading-[1.8] text-ivory/70">
        The address you followed does not exist, or it has moved. Everything else is right where it should be.
      </p>
      <Link href="/" className="btn btn-brass mt-9">
        Back to the home page
      </Link>
    </section>
  );
}
