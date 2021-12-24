import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import './Navbar.css'
import './about.css'
import './aboutArticles.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
