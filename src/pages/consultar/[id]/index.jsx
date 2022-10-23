import Head from "next/head";
import { useEffect, useState } from "react";
import GoBackButton from "../../../components/Buttons/GoBack";
import { randomData } from "../../../helpers/data/generate";
import styles from "../../../styles/Search.module.css";

const SearchChecklistClientsByIdPage = ({ id, token }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const serverData = randomData();
    const queryResult = serverData.find((client) => Number(client.documento.id) === Number(id));

    setData(queryResult);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Documento N° ${id}`}</title>
        <meta name="description" content="página de pesquisa de documentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBackButton />

      <div className={styles.main}>
        {data && (
          <div className={styles.document}>
            <div>
              <p>{`Documento n° ${data.documento.id}`}</p>
            </div>

            <div className={styles.documentHeading}>
              <div>
                <p>Código</p>
                <p>{data.documento.codigo_cliente}</p>
              </div>

              <div>
                <p>Data de Elaboração</p>
                <p>{data.documento.data_elaboracao.split(" ")[0]}</p>
              </div>

              <div>
                <p>Elaborado por</p>
                <p>{data.documento.elaborado_por}</p>
              </div>

              <div>
                <p>Nº da Revisão</p>
                <p>{data.documento.numero_revisao}</p>
              </div>

              <div>
                <p>Data da Última Revisão</p>
                <p>{data.documento.data_ultima_revisao}</p>
              </div>

              <div>
                <p>Aprovado por</p>
                <p>{data.documento.aprovado_por}</p>
              </div>

              <div>
                <p>Título</p>
                <p>{data.documento.titulo}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  return {
    props: {
      id,
      token: "valid_token"
    }
  };
};

export default SearchChecklistClientsByIdPage;
