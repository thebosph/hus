import sanityClient from "../client";

import React from "react";
import Head from "next/head";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import News from "../components/news";
import { useState } from "react";

function Home({ homePage, latests }) {
  const { author, body, homeImage, title } = homePage;
  const [show, setShow] = useState(true);

  return (
    <div className="flex md:flex-row flex-col my-20 overflow-hidden ">
      <Head>
        <title>Huseyin Icen | Istanbul Univercity</title>
      </Head>
      <div className=" w-full md:w-1/2 pl-0 ">
        <img
          src={homeImage.asset.url}
          className=" object-cover w-full h-1/6 shadow-2xl rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
        />
        <div className="w-full  pl-0  shadow-xl rounded-xl prose-sm my-10">
          <h1 className="font-montserrat text-center font-bold  text-gray-500 ">
            {title}
          </h1>
          <BlockContent
            className={`text-gray-500 p-3 font-montserrat  ${
              show ? "line-clamp-6" : ""
            } h-auto`}
            blocks={body}
          />
          <button
            onClick={() => setShow(!show)}
            className="rounded-lg px-2  border self-end text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500"
          >
            read to continue
          </button>
        </div>
      </div>

      <div className="md:w-1/2 pl-5">
        <h2 className="font-bold text-gray-500 font-montserrat text-3xl py-5 md:py-0">
          Latest Posts
        </h2>
        {latests &&
          latests.map((latest) => <News key={latest.title} latest={latest} />)}
      </div>
    </div>
  );
}

export default Home;

const homeQuery = groq`
*[_type == "home"][0]{
  _id,
  title,
  author -> {
    name,
    image{
      asset ->
    }
  },
  homeImage{
    asset -> {
      _id,
      url
    }
  },
  body,
  publishedAt,
}

`;

export const getStaticProps = async () => {
  const homePage = await sanityClient.fetch(homeQuery);
  const news =
    await sanityClient.fetch(`*[_type == "post"] | order(date desc, _createdAt desc) {
    _id,
    title,
    slug,
    review,
    mainImage {
      asset -> {
        _id,
        url
      }
    },}[0...3]`);
  const responses = await Promise.all([homePage, news]);
  return {
    props: {
      homePage: responses[0],
      latests: responses[1],
    },
  };
};
