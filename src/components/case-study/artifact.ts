import type { ImageMetadata } from 'astro';

export interface Artifact {
  image: ImageMetadata;
  alt: string;
  caption: string;
  source: string;
}
