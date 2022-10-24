import puppeteer from 'puppeteer';

const generatePdf = async (url, id) => {
  const browserSession = await puppeteer.launch({ headless: true });
  const newPage = await browserSession.newPage();

  /*   await newPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 }); */
  await newPage.goto(url, { waitUntil: 'networkidle2' });
  /* await newPage.emulateMediaType('screen'); */

  const pdfFile = await newPage.pdf({
    /*     path: `/public/pdf/documento${1}.pdf`, */
    pageRanges: "1",
    format: 'a4',
    printBackground: true
  });

  await browserSession.close();

  return pdfFile;
};

export default async function handler(request, response) {
  try {
    const { url, id } = request.query;

    const pdf = await generatePdf(url, id);

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader('Content-Length', `${pdf.length}`);

    return response.status(200).send(pdf);
  } catch (error) {
    return response.status(400).json({
      error: true,
      message: 'Erro gerar o arquivo pdf.',
      defaultMessage: error.message,
      data: error
    });
  }
}
