import Head from "next/head";
import RegisterForm from "../../components/Forms/Register";
import styles from "../../styles/Registration.module.css";

const RegistrationPage = () => {
  const handleSubmit = (data) => {
    const trimmedData = data.map((item) => {
      const itemForTrimming = typeof item === "string";

      if (itemForTrimming) {
        return item.trim();
      }

      return item;
    });

    return console.log(trimmedData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Protótipo Apoio Ecolimp</title>
        <meta name="description" content="página inicial do protótipo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registro Admissional</h1>

        <RegisterForm submitHandler={handleSubmit} />
      </main>
    </div>
  );
};

export default RegistrationPage;
