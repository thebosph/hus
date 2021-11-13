const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `

  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    
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
  `;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
