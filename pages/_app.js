import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Authenticate } from '../services/ServiceAuth'
import { BrowserRouter } from 'react-router-dom'
// import 'metrics-graphics/dist/mg.css'
// import '../UI/metricsgraphics.css';




export default function MyApp({ Component, pageProps }) {



  useEffect(() => {

    async function Auth() {
        const data = await Authenticate();
        localStorage.setItem("auth", JSON.stringify(data));
    }

    Auth();

    },[]);

  return <Component {...pageProps} />

};