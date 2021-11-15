import sanityClient from "../../client";
import client from "../../client";

import { useRouter } from "next/router";

import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({ post }) => {
  const router = useRouter();
  const turnBack = () => {
    router.push("/blog");
  };

  return (
    <div className="max-w-6xl my-20 max-h-full bg-white px-10 ">
      <div className="flex justify-between flex-row my-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-500 hover:text-gray-600 py-4 font-montserrat">
            {post.title}
          </h1>
          <span className="font-extralight text-sm text-blue-400">
            {new Date(post.publishedAt).toDateString()}{" "}
          </span>
          <span className="font-montserrat font-light text-sm text-gray-600">
            {" "}
            | {post.author.name}
          </span>
          <span className="font-montserrat font-extralight text-sm text-gray-500">
            {" "}
            | {post.categories.title}
          </span>
        </div>
        <button
          onClick={turnBack}
          className="rounded-lg px-2  border self-end text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500"
        >
          Come Back
        </button>
      </div>
      <div className="md:flex flex-col items-center">
        <img
          src={post.mainImage.asset.url}
          width="300"
          height="300"
          className="object-cover h-48 w-full"
        />
        <div className="prose font-montserrat px-6 my-3">
          <BlockContent blocks={post.body} />
        </div>
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(`
  *[_type == "post" && defined(slug.current)][].slug.current
  `);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

const query = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  review,
  slug,
  author -> {
    name,
    image {
      asset ->
    }
  },
  mainImage {
    asset -> {
      _id,
      url
    }
  },
  categories[0] ->,
  publishedAt,
  body[]{
    ...,
    asset->{
      ...,
      "_key":_id
    }
  },
}
`;
export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = await sanityClient.fetch(query, { slug });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
