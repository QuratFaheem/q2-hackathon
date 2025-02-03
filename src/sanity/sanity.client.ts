
import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig={
    projectId: "lsmgqpme",
    dataset: "production",
    apiVersion:"2025-01-18",
    useCdn: false
}

export default createClient(SanityClient);
