import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export const Header = component$(() => {

    return (
        <header>
            <nav class="fixed grid grid-cols-3 grid-wrap bg-custom-primary p-3 text-white w-full top-0 z-50">
                <div class="flex items-center justify-items-start justify-start gap-10">
                    <a href="">
                        Projetos
                    </a>
                    <a href="">
                        Equipa
                    </a>
                </div>
                <div class="flex justify-center items-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <div class="flex justify-end items-center gap-10">
                    <a href="">
                    Eventos
                    </a>
                    <a href="">
                    Contactos
                    </a>
                </div>
            </nav>
        </header>
    );
});