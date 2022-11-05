import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import SimpleButton from "../../../components/Buttons/Simple";
import { randomData } from "../../../helpers/data/generate";
import styles from "../../../styles/Search.module.css";

const SearchChecklistClientsByIdPage = ({ id, token }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const serverData = randomData();
    const queryResult = serverData.find((client) => Number(client.documento.id) === Number(id));

    setData(queryResult);
  }, []);

  const getPDF = async (apiURL, htmlUrl) => {
    const pdfFile = await axios.get(apiURL, {
      params: { url: htmlUrl, id },
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf"
      }
    });

    return pdfFile;
  };

  console.log("Dados formulário:", data);

  const handlePagePrintTrigger = async () => {
    const url = `http://localhost:3000/consultar/${id}`;
    const apiUrl = "/api/html-to-pdf";

    await getPDF(apiUrl, url)
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `documento_${id}.pdf`;
        link.click();
      })
      .catch((error) => console.error("Erro ao criar o arquivo pdf: ", error));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Documento N° ${id}`}</title>
        <meta name="description" content="página de pesquisa de documentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {data && (
          <div className={styles.document}>
            <div>
              <p>{`Documento n° ${data.documento.id}`}</p>
            </div>

            <div className={styles.documentHeading}>
              <div>
                <p>Código</p>

                <hr />

                <p>{data.documento.codigo_cliente}</p>
              </div>

              <div>
                <p>Data de Elaboração</p>

                <hr />

                <p>{data.documento.data_elaboracao}</p>
              </div>

              <div>
                <p>Elaborado por</p>

                <hr />

                <p>{data.documento.elaborado_por}</p>
              </div>

              <div>
                <p>Nº da Revisão</p>

                <hr />

                <p>{data.documento.numero_revisao}</p>
              </div>

              <div>
                <p>Data da Última Revisão</p>

                <hr />

                <p>{data.documento.data_ultima_revisao}</p>
              </div>

              <div>
                <p>Aprovado por</p>

                <hr />

                <p>{data.documento.aprovado_por}</p>
              </div>

              <div className={styles.horizontalStack}>
                <p className={styles.textWithPaddingLeft}>Título:</p>

                <p>{data.documento.titulo}</p>
              </div>
            </div>

            <div className={styles.registrationData}>
              <div>
                <p>Nome:</p>
                <p>{data.cliente.dados_pessoais.nome}</p>
              </div>

              <div>
                <p>RE/MAT.:</p>
                <p>{data.cliente.dados_pessoais.re_mat}</p>
              </div>

              <div>
                <p>Função:</p>
                <p>{data.cliente.dados_pessoais.funcao}</p>
              </div>

              <div>
                <p>Horário: </p>
                <p>{data.cliente.dados_pessoais.horario}</p>
              </div>

              <div>
                <p>Escala: </p>
                <p>{data.cliente.dados_pessoais.escala}</p>
              </div>

              <div>
                <p>Contrato: </p>
                <p>{data.cliente.dados_pessoais.contrato}</p>
              </div>
            </div>

            <div className={styles.attachments}>
              <div>
                <img src="/cpf_front.jpg" />
              </div>

              <div>
                <img src="/cpf.jpg" />
              </div>
            </div>
          </div>
        )}

        <SimpleButton type="button" text="Baixar documento" handler={handlePagePrintTrigger} />
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
