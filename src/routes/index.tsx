import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import ProjectGrid from '~/components/projects/ProjectGrid';

export default component$(() => {

  return (
    <>
      <main
      class="min-h-screen max-w-screen flex flex-col items-center justify-center 
      text-[#213547] bg-gradient-to-b from-red-400 to-red-900 top-2 pt-20"
      >
        <ProjectGrid/>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'NIAEFEUP - Núcleo de Informática da Associação de Estudantes da Universidade do Porto',
};
