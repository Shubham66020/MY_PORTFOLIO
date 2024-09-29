// pages/_app.js
import { ThemeProvider } from '../components/ThemeProvider'; // Adjust the path if necessary
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
