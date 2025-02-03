import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,      // Use the imported projectId
  dataset,        // Use the imported dataset
  apiVersion,     // Use the imported apiVersion
  useCdn: false,  // Set to false if statically generating pages, using ISR or tag-based revalidation
});
