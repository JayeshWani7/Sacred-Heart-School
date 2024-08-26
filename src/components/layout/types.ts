import type { ImageMetadata } from "astro"

type slide = {
    img: ImageMetadata;
    title: string;
    description?: string;
}


type tab = {
    title: string;
    text?: string | Record<string, any>;
};

type testimonial = {
    name: string;
    text: string;
}

export type { slide, tab, testimonial }