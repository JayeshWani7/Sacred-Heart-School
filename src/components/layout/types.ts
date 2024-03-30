import type { ImageMetadata } from "astro"

type slide = {
    img: ImageMetadata;
    title: string;
    description?: string;
}

export type { slide }