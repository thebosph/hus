import Head from "next/head";
import Link from "next/link";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { useState } from "react";
import Pagination from "../../components/pagination";
export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //Get Current Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //chancge page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="my-20">
      <h1 className="text-5xl font-bold font-montserrat mx-4"> Blogs </h1>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 overflow-hidden">
        {currentPosts &&
          currentPosts.map((post) => (
            <li
              key={post._id}
              className="flex flex-col h-90 space-x-4 p-4  my-3 shadow-lg rounded-lg"
            >
              <img
                src={post.mainImage.asset.url}
                alt=""
                className="rounded-lg object-cover bg-gray-100 h-48 w-full"
                width="90"
                height="90"
              />
              <div className="min-w-0 flex-col flex justify-around  h-40 ">
                <h2 className="font-montserrat my-2 font-bold text-gray-500">
                  {post.title}
                </h2>
                <p className="text-sm font-medium line-clamp-2 ">
                  <BlockContent blocks={post.review} />
                </p>
                <Link href="/blog/[slug]" as={`/blog/${post.slug?.current}`}>
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
  const allPosts = await sanityClient.fetch(`
  *[_type == "post"] | order(date desc, _createdAt desc) {
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
    body,
  }
  `);

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 10,
  };
}
