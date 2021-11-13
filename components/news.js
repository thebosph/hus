import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

function News({ latest }) {
  return (
    <div className="p-4 flex space-x-4  shadow-xl rounded-lg">
      <img
        src={latest.mainImage.asset.url}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-montserrat font-bold text-gray-500">
          {latest.title}
        </h2>
        <p className="text-sm font-medium ">
          <BlockContent blocks={latest.review} />
        </p>
        <Link href="/blog/[slug]" as={`/blog/${latest.slug?.current}`}>
          <button className="rounded-lg px-2 border shadow-xl my-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500">
            click for more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default News;
