import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// import App from 'next/app';
// import Head from 'next/head';

// export default class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <div>
//         <Head>
//           <title>Tay-Made</title>
//           <link rel="icon" type="image/x-icon" href="./public/favicon.ico" />
//         </Head>
//         <Component { ...pageProps } />
//       </div>
//     );
//   }
// }