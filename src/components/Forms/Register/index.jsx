import { useState } from "react";
import styles from "../../../styles/components/Forms/Register.module.css";
import SimpleButton from "../../Buttons/Simple";

const RegisterForm = ({ submitHandler }) => {
  const [form, setForm] = useState({});

  const handleInputChange = (input) => {
    const value = input.target.value;
    const name = input.target.getAttribute("name");

    setForm((previousValue) => ({
      ...previousValue,
      [name]: value.trim() === "" ? null : value
    }));
  };

  return (
    <form onSubmit={() => submitHandler(form)} className={styles.form}>
      <div className={styles.borderedHorizontalStack}>
        <h2 className={styles.subtitle}>Dados pessoais</h2>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="first-name">
              Nome
            </label>

            <input
              type="text"
              name="nome"
              id="first-name"
              value={form?.nome}
              placeholder="Edgar Aurélio"
              onChange={handleInputChange}
              className={styles.textualInput}
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="last-name">
              Sobrenome
            </label>

            <input
              type="text"
              id="last-name"
              name="sobrenome"
              value={form?.sobrenome}
              placeholder="da Silva Maia"
              onChange={handleInputChange}
              className={styles.textualInput}
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="re-mat">
              RE/MAT.
            </label>

            <input
              type="text"
              id="re-mat"
              name="re_mat"
              value={form?.re_mat}
              placeholder="123456AB5"
              onChange={handleInputChange}
              className={styles.textualInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.borderedHorizontalStack}>
        <h2 className={styles.subtitle}>Função</h2>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="function">
              Função
            </label>

            <input
              type="text"
              id="function"
              name="funcao"
              value={form?.funcao}
              onChange={handleInputChange}
              className={styles.textualInput}
              placeholder="Espacialista em Medicina Geral"
            />
          </div>
        </div>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="schedule">
              Horário
            </label>

            <input
              type="text"
              id="schedule"
              name="horario"
              value={form?.horario}
              placeholder="22:00 - 06:00"
              onChange={handleInputChange}
              className={styles.textualInput}
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="contract">
              Contrato
            </label>

            <input
              type="text"
              id="contract"
              name="contrato"
              value={form?.contrato}
              placeholder="Tempo integral"
              onChange={handleInputChange}
              className={styles.textualInput}
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="daytime-scale">
              Escala
            </label>
            <select
              type="text"
              name="escala"
              id="daytime-scale"
              value={form?.escala}
              placeholder="Madrugada"
              onChange={handleInputChange}
              className={styles.selectionInput}
            >
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
              <option value="Madrugada">Madrugada</option>
            </select>
          </div>
        </div>
      </div>

      {/* FILE UPLOAD FORM */}

      <div className={styles.borderedHorizontalStack}>
        <h2 className={styles.subtitle}>Saúde Ocupacional</h2>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="vaccination-card">
              Carteira de vacinação
            </label>

            <input
              type="file"
              id="vaccination-card"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="aso">
              ASO
            </label>

            <input
              id="aso"
              type="file"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>
        </div>
      </div>

      <div className={styles.borderedHorizontalStack}>
        <h2 className={styles.subtitle}>Dados cadastrais</h2>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="e-social">
              eSocial
            </label>

            <input
              type="file"
              id="e-social"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="electoral-card">
              Situação eleitoral
            </label>

            <input
              type="file"
              id="electoral-card"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="identity-card">
              RG
            </label>

            <input
              type="file"
              id="identity-card"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>
        </div>

        <div className={styles.stack}>
          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="cpf-card">
              CPF
            </label>

            <input
              type="file"
              id="cpf-card"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="electoral-card">
              PIS
            </label>

            <input
              type="file"
              id="pis-card"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>

          <div className={styles.horizontalStack}>
            <label className={styles.inputLabel} for="proof-of-address">
              Comprovante de residência
            </label>

            <input
              type="file"
              id="proof-of-address"
              className={styles.fileInput}
              accept=".doc,.docx,application/msword,.pdf,.png,.jpeg"
            />
          </div>
        </div>
      </div>

      <SimpleButton type="submit" text="Registrar" />
    </form>
  );
};

export default RegisterForm;
