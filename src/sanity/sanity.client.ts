
import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig={
    projectId: "lsmgqpme",
    dataset: "production",
    apiVersion:"2025-02-02",
    token: process.env.SANITY_API_TOKEN, // Ensure the token is set here
  useCdn: false,
}

export default createClient(SanityClient);
