import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: blue;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
