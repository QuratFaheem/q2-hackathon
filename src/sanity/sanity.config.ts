import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'


export default defineConfig({
    name: 'default',
    title: 'E-Commerce',

    projectId: 'lsmgqpme',
    dataset: 'production',
    basePath:"/studio",

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})