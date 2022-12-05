import { component$ } from "@builder.io/qwik";

type SectionHeaderProps = {
    text: string;
};

export const SectionHeader = component$(({ text }: SectionHeaderProps) => (
    <h1 class="text-3xl text-white">&#60; {text} /&#62;</h1>
));