"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `A Look at my Latest Projects`;


export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
