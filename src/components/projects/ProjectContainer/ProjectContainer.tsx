import { component$ } from "@builder.io/qwik";

type ProjectContainerProps = {
    title: string;
    subtitle: string;
    image_url: string;
};

export const ProjectContainer = component$<ProjectContainerProps>(({ title, subtitle, image_url }) => (
    <>
        <img src={image_url} alt={`${title} image`} class="aspect-square w-[250px] h-[250px]" />
        <div class="flex flex-col justify-center items-center gap-4">
            <p class="text-3xl font-bold">{title}</p>
            <p class="text-l font-bold">{subtitle}</p>
        </div>
    </>
));