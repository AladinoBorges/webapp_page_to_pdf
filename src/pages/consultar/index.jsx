import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GoBackButton from "../../components/Buttons/GoBack";
import SimpleButton from "../../components/Buttons/Simple";
import { randomData } from "../../helpers/data/generate";
import styles from "../../styles/Search.module.css";

const SearchChecklistClientsPage = () => {
  const [clientsData, setClientsData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [documentNumber, setDocumentNumber] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSearch = (id) => {
    setIsLoading(true);
    setShowWarning(false);

    const queryResult = clientsData.find((client) => Number(client.documento.id) === Number(id));

    if (queryResult) {
      setSearchResult(queryResult);

      return setIsLoading(false);
    }

    setSearchResult(null);
    setShowWarning(true);

    return setIsLoading(false);
  };

  const handleCardClick = (id) => {
    router.push(`/consultar/${id}`);
  };

  useEffect(() => {
    const newData = randomData();

    setClientsData(newData);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pesquisar documentos</title>
        <meta name="description" content="página de pesquisa de documentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBackButton />

      {isLoading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader} />
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.searchStack}>
            <input
              className={styles.textualInput}
              type="text"
              placeholder="Insira o número do documento"
              onChange={(event) => {
                setShowWarning(false);
                setDocumentNumber(event.target.value);
              }}
            />

            <SimpleButton
              type="button"
              text="Pesquisar"
              handler={() => handleSearch(documentNumber)}
            />
          </div>

          {searchResult && (
            <div className={styles.document}>
              <div
                className={styles.documentCard}
                onClick={() => handleCardClick(searchResult.documento.id)}
              >
                <p>{`Documento n° ${searchResult.documento.id}`}</p>

                <div>
                  <p>Código:</p>
                  <p>{searchResult.documento.codigo_cliente}</p>
                </div>

                <div>
                  <p>Nome do cliente:</p>
                  <p>{searchResult.cliente.dados_pessoais.nome}</p>
                </div>
              </div>
            </div>
          )}

          {showWarning && !searchResult && (
            <div className={styles.warningStack}>
              <p>{`Nenhum documento com o número ${documentNumber} foi encontrado.`}</p>

              <p>Verifique os dados preenchidos ou tente novamente mais tarde.</p>

              <p>Se o problema persistir, contacte o administrador da aplicação.</p>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default SearchChecklistClientsPage;
