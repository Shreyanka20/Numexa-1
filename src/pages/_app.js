import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <div><Component {...pageProps} />
  <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 -z-10 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"><defs><pattern id=":S1:" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1"><path d="M.5 40V.5H40" fill="none" stroke-dasharray="0"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)"></rect></svg></div>;

}

export default MyApp;
