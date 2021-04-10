import "../styles/globals.css";
import data from "../public/db.json";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} data={data} />;
}

export default MyApp;
