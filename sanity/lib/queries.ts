import { client } from './client'
import { groq } from 'next-sanity'



export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      author->{
        name
      },
      mainImage,
      categories[]->{
        _id,
        title
      },
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      }
    }`
  )
}


export async function getPost(slug: string) {
    return client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        author->{
          name
        },
        mainImage,
        categories[]->{
          _id,
          title
        },
        body
      }`,
      { slug }
    )
  }

  export async function getHomePage() {
    return client.fetch(
      groq`*[_type == "page"]{
        pageBuilder[]{
          _type == "hero" => {
            _type,
            heading,
            tagline,
            "imageUrl": image.asset->url,
            "altText": image.alt
          },
          _type == "feature" => {
            _type,
            "features": features[] {
              heading,
              "imageUrl": image.asset->url,
              "altText": image.alt
            }
          },
          _type == "integration" => {
            _type,
            heading,
            subheading,
            "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
          },
          _type == "demo" => {
            _type,
            bulletPoints,
            "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
          },
          _type == "compliance" => {
            _type,
            heading,
             "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
          },
          _type == "CTA" => {
            _type,
            heading,
            buttonText
          }
        }
      }`
    )
  }

