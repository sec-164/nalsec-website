import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro:content";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    manufacturer: z.string(),
    category: z.enum(["charger", "battery"]),
    categoryLabel: z.string(),
    models: z.array(z.string()),
    applications: z.array(z.string()),
    summary: z.string(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })),
    catalog: z.string().optional(),
    sources: z.array(z.string()),
    questions: z.array(z.string()),
    order: z.number(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    targets: z.array(z.string()),
    sources: z.array(z.string()),
    questions: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { products, services };
