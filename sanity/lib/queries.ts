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



  export async function getHero() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "hero"][0]{
        _type,
        heading,
        tagline,
        "imageUrl": image.asset->url,
        "altText": image.alt
      }`
    )
  }

  export async function getFeatures() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "feature"][0]{
         _type,
            "features": features[] {
              heading,
              "imageUrl": image.asset->url,
              "altText": image.alt
            }
      }`
    )
  }

  export async function getIntegration() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "integration"][0]{
          _type,
            heading,
            subheading,
            "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
      }`
    )
  }
  export async function getCompliance() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "compliance"][0]{
          _type,
            heading,
             "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
      }`
    )
  }
  export async function getDemo() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "demo"][0]{
          _type,
            bulletPoints,
            "integrationImages": integrationImages[] {
              "imageUrl": asset->url,
              alt
            }
      }`
    )
  }
  export async function getCTA() {
    return client.fetch(
      groq`*[_type == "page"][0].pageBuilder[_type == "CTA"][0]{
          _type,
            heading,
            buttonText
      }`
    )
  }

  export async function getHomePage() {
    return client.fetch(
      groq`*[_type == "page"][0]{
        pageBuilder[] {
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
              "altText": image.alt,
              color
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
    );
  }


  export async function getTermsOfUsePageData() {
    return client.fetch(
      groq`*[_type == "termsOfUse"]{
        title,
        content
      }`
    )
  }
  export async function getPrivacyPolicyPageData() {
    return client.fetch(
      groq`*[_type == "privacyPolicy"]{
        title,
        content
      }`
    )
  }