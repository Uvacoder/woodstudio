import Head from "next/head";

import Layout from "components/Layout";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </>
  );
};

About.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default About;
