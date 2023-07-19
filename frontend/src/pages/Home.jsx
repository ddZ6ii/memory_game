import { useState } from "react";
import SignForm from "../components/SignForm";
import Footer from "../components/Footer";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleSignIn = () => setIsLogin((prev) => !prev);
  return (
    <>
      {/* <section className="min-h-[calc(100dvh-80px)]"> */}
      <section className="min-h-[calc(100dvh-40px)]">
        <h1>Memory Challenge</h1>

        <h2>
          Keep your brain sharp and muscle your
          <span className="text-neutral-dark">
            {" "}
            <em>cognitive memory</em>{" "}
          </span>
          skills with this fun game!
        </h2>

        <SignForm isLogin={isLogin} toggleSignIn={toggleSignIn} />
      </section>

      <Footer />
    </>
  );
}
