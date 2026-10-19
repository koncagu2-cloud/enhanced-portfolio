import type { ImageMetadata } from 'astro';

export interface Artifact {
  name: string;
  image: ImageMetadata;
  alt: string;
  caption: string;
  source: string;
}
