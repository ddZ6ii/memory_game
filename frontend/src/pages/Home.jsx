import SignForm from "../components/SignForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100dvh-40px)] md:min-h-[calc(100dvh-48px)]">
        <h1>Memory Challenge</h1>

        <h2>
          Keep your brain sharp and muscle your
          <span className="text-neutral-dark">
            {" "}
            <em>cognitive memory</em>{" "}
          </span>
          skills with this fun game!
        </h2>

        <SignForm />
      </section>
      <Footer />
    </>
  );
}
