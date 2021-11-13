const STUDIO_REWRITE = {
  source: "/dashboard/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/dashboard/:path*"
      : "/public/admin/index.html",
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  rewrites: () => [STUDIO_REWRITE],
};
