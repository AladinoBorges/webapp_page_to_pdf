import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protótipo Apoio Ecolimp</title>
        <meta name="description" content="página inicial do protótipo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Apoio Ecolimp</h1>

        <p className={styles.description}>
          <code className={styles.code}>esta/aplicação.jsx</code>
          {' '}foi desenvolvida como protótipo para demonstrar a automação do processo de checklists apresentado
        </p>

        <div className={styles.grid}>
          <a href="/tutoriais" className={styles.card}>
            <h2>Tutoriais &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/registro" className={styles.card}>
            <h2>Novo cliente &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="/consultar"
            className={styles.card}
          >
            <h2>Consultar clientes &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="/intranet"
            className={styles.card}
          >
            <h2>Administradores &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.description}>
          desenvolvido por aladino borges
        </p>
      </footer>
    </div>
  )
}
