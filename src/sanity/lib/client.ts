import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const serverReadToken = process.env.SANITY_API_READ_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: 'published',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const previewClient = client.withConfig({
  token: serverReadToken,
  useCdn: false,
  perspective: 'drafts',
})

export function hasSanityPreviewToken() {
  return Boolean(serverReadToken)
}
