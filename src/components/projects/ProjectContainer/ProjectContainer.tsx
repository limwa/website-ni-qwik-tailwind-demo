import { $, component$, QRL } from "@builder.io/qwik";

type ProjectContainerProps = {
    type: string;
    objectId: string;
    name: string;
    description: string;
    imageURL: string;
    isArchived: boolean;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    updateProjects: QRL<() => void>;
};

export const ProjectContainer = component$<ProjectContainerProps>(({ name, description, imageURL, likes, dislikes, objectId, updateProjects }) => {
    
    const rate = $(async (action: "like" | "dislike") => {
        await fetch(`https://parseapi.back4app.com/functions/${action}Project?id=${objectId}`, {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': 'yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9',
                'X-Parse-REST-API-Key': '3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c',
            }
        });

        updateProjects();
    })

    return (
        <>
            <img src={imageURL} alt={`${name} image`} class="aspect-square w-[250px] h-[250px]" />
            <div class="flex flex-col justify-center items-center gap-4">
                <p class="text-3xl font-bold">{name}</p>
                <p class="text-l font-bold">{description}</p>
            </div>
            <div class="flex justify-between">
                <div class="flex gap-2 items-center">
                    <p class="text-2xl font-light">{likes}</p>
                    <button onClick$={() => rate("like")} class="bg-neutral-200 rounded-md text-black p-2">Like</button>
                </div>

                <div class="flex gap-2 items-center">
                    <button onClick$={() => rate("dislike")} class="bg-neutral-200 rounded-md text-black p-2">Disike</button>
                    <p class="text-2xl font-light">{dislikes}</p>
                </div>
            </div>
        </>
    );
});