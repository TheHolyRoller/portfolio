"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `A look at my latest projects`;


export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
