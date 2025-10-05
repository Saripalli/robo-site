import Head from "next/head";
import Link from "next/link";

export default function Press() {
  return (
    <>
      <Head>
        <title>Press | Springlerobotics</title>
        <meta
          name="description"
          content="Read about Springlerobotics in the press and explore our latest media coverage."
        />
      </Head>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Press Coverage
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Here are some of the articles and publications where Springlerobotics
          has been featured. Check back soon for more updates.
        </p>

        {/* PDF Link Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Featured Article
          </h2>
          <p className="text-gray-600 mb-4">
            Click below to view our press release.
          </p>

          <a
            href="/press-release.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
          >
            View Press Article (PDF)
          </a>
        </div>

        {/* Optional Back Link */}
        <div className="mt-10">
          <Link
            href="/"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
