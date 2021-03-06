import type { NextPageWithLayout } from "types/next";
import Layout from "components/layouts";
import RegisterForm from "page_components/join/registerform";
import Head from "next/head";

const LoginPage: NextPageWithLayout = () => {
  return (
    <main className="site-width pad-one">
      <RegisterForm />
      <Head>
        <title>Create Account: Quizr</title>
      </Head>
    </main>
  );
};

LoginPage.Layout = Layout;

export default LoginPage;
