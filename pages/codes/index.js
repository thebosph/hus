import Head from "next/head";
import Link from "next/link";

import sanityClient from "../../client";

export default function Home({ allCodes }) {
  return (
    <div className="my-20">
      <h1 className="text-5xl font-bold font-montserrat"> Codes </h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 overflow-hidden">
        {allCodes &&
          allCodes.map((code) => (
            <li
              key={code._id}
              className="flex flex-col h-90 space-x-4 p-4  my-3 shadow-lg rounded-lg"
            >
              <img
                src={code.mainImage.asset.url}
                alt={code.title}
                className="rounded-lg object-cover bg-gray-100 h-48 w-full"
                width="90"
                height="90"
              />
              <div className="min-w-0 flex-col flex justify-around  h-40 ">
                <h2 className="font-montserrat my-2 font-bold text-gray-500">
                  {code.title}
                </h2>

                <Link href="/codes/[slug]" as={`/codes/${code.slug?.current}`}>
                  <button className="rounded-lg px-2 border w-40 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500">
                    click for more
                  </button>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allCodes = await sanityClient.fetch(`
  *[_type == "code"] | order(date desc, _createadAt desc){
    _id,
    title,
    slug,
    mainImage {
      asset -> {
        _id,
        url
      }
    },
    publishedAt,
     
  }
  `);

  return {
    props: {
      allCodes,
    },
    revalidate: 10,
  };
}
