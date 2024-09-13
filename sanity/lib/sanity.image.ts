import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '.././env'
import { Image } from '@sanity/types'

// Correct the type using ReturnType
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// Function to generate image URL
export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
