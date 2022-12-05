import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/navigation/Header';
import Footer from '~/components/navigation/Footer';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
