
import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig={
    projectId: "lsmgqpme",
    dataset: "production",
    apiVersion:"2025-02-02",
    useCdn: false,
token: process.env.SANITY_SECRET_TOKEN,
}

export default createClient(SanityClient);
