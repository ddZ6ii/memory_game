import { NavLink } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

import Footer from "../components/Footer";
import SignForm from "../components/SignForm";

import capitalizeText from "../helpers/capitalize";

export default function Home() {
  const { userAccount, isAuthenticated } = useAuthContext();

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

        {isAuthenticated ? (
          <>
            <h2>Welcome Back {capitalizeText(userAccount.pseudo)}! </h2>

            <NavLink
              to="/settings"
              type="submit"
              className="btn btn__primary__default self-center"
            >
              New Game
            </NavLink>
          </>
        ) : (
          <SignForm />
        )}
      </section>
      <Footer />
    </>
  );
}
