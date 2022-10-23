import Head from "next/head";
import { useRouter } from "next/router";
import GoBackButton from "../../components/Buttons/GoBack";
import RegisterForm from "../../components/Forms/Register";
import styles from "../../styles/Registration.module.css";

const RegistrationPage = () => {
  const handleSubmit = (data) => {
    const router = useRouter();

    const trimmedData = Object.entries(data).map((item) => {
      const itemForTrimming = typeof item[1] === "string";

      if (itemForTrimming) {
        return { [item[0]]: item[1].replace(/\s+/g, " ") };
      }

      return { [item[0]]: item[1] };
    });

    console.log(trimmedData);

    return router.push(`/consultar/${1}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Protótipo Apoio Ecolimp</title>
        <meta name="description" content="página inicial do protótipo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GoBackButton />

        <h1 className={styles.title}>Registro Admissional</h1>

        <RegisterForm submitHandler={handleSubmit} />
      </main>
    </div>
  );
};

export default RegistrationPage;
