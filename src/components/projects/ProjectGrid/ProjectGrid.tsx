import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { z, type ZodType } from "zod";
import SectionHeader from "~/components/layout/SectionHeader";
import ProjectContainer from "~/components/projects/ProjectContainer";

export const projectsValidator = z.object({
    results: z.array(
        z.object({
            objectId: z.string(),
            name: z.string(),
            description: z.string(),
            type: z.string(),
            imageURL: z.string(),
            isArchived: z.boolean(),
            likes: z.number(),
            dislikes: z.number(),
            createdAt: z.string(),
            updatedAt: z.string(),
        })
    ),
});

type ProjectsResourceType = z.infer<typeof projectsValidator>;

export const ProjectGrid = component$(() => {
    
    const projectsResource = useResource$<ProjectsResourceType>(async ({ track, cleanup }) => {
        const abortController = new AbortController();
        cleanup(() => abortController.abort('cleanup'));

        const res = await fetch(`https://parseapi.back4app.com/classes/Project`, {
            signal: abortController.signal,
            headers: {
                'X-Parse-Application-Id': 'yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9',
                'X-Parse-REST-API-Key': '3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c',
            }
        });

        const body = await res.json();
        const parsed = projectsValidator.parse(body);

        return parsed;
    });

    return (
        <>
            <SectionHeader text="Projetos"/>
            <section class="grid grid-cols-3 grid-rows-[repeat(3, fill)] justify-items-center p-10 gap-6 text-white">
                <Resource
                    value={projectsResource}
                    onPending={() => <div class="flex col-span-1 row-span-2 justify-center flex-wrap flex-col flex-grow bg-red-800 p-7 gap-8 rounded-lg bg-opacity-50 backdrop-blur-lg border-2 border-red-500">Loading...</div>}
                    onRejected={() => <div class="flex col-span-1 row-span-2 justify-center flex-wrap flex-col flex-grow bg-red-800 p-7 gap-8 rounded-lg bg-opacity-50 backdrop-blur-lg border-2 border-red-500">Failed to person data</div>}
                    onResolved={(projects) => {
                        return <>{
                            projects.results.map((project) => (
                                <div key={project.objectId} class="flex col-span-1 row-span-2 justify-center flex-wrap flex-col flex-grow bg-red-800 p-7 gap-8 rounded-lg bg-opacity-50 backdrop-blur-lg border-2 border-red-500">
                                    <ProjectContainer
                                        title={project.name}
                                        subtitle={project.description}
                                        image_url={project.imageURL}
                                    />
                                </div>
                            ))
                        }</>;
                    }}
                />
            </section>
        </>
    );
});
