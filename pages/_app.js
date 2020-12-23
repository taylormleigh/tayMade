import '../styles.css';

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
  duration: 1
}

export default function MyApp({ Component, pageProps}) {
  return <Component {...pageProps} />
}