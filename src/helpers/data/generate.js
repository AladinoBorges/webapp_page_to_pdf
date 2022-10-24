const schedule = ['06:00 - 12:00', '12:00 - 18:00', '18:00 - 00:00', '00:00 - 06:00'];
const daytimeScale = ['Manhã', 'Tarde', 'Noite', 'Madrugada'];
const outfitColors = ['Azul', 'Bege'];
const outfitSizes = ['S', 'SM', 'M', 'L', 'XL', '2XL', '3XL'];
const shoesSizes = [8, 9, 10, 11, 12, 13];
const isNewOutfit = [true, false];

const generateRandomNumber = (max = 10) => Math.floor(Math.random() * max) + 1;

const randomData = (size = 30) => {
  const newData = [...new Array(size)].map((_, index) => {
    const newDate = new Date();

    return ({
      'documento': {
        'id': index + 1,
        'codigo_cliente': `REG-RH-${generateRandomNumber(1000)}`,
        'data_elaboracao': newDate.toLocaleString('pt-BR').split(" ")[0],
        'elaborado_por': 'RH',
        'numero_revisao': generateRandomNumber(13),
        'data_ultima_revisao': newDate.toLocaleString('pt-BR').split(" ")[0],
        'aprovado_por': 'Nome da pessoa que aprovou',
        'titulo': `Dado aleatório ${generateRandomNumber(1000)}`
      },
      'cliente': {
        'servico': {
          'numero_curriculo': `${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
          'admissao': newDate.toLocaleString('pt-BR').split(" ")[0],
          'integracao': 'Dado aleatório',
          'atendimento': 'Pessoa aleatória',
        },
        'dados_pessoais': {
          'nome': `Cliente ${index + 1 < 10 ? `0${index + 1}` : index + 1} Sobrenome`,
          're_mat': 'Dado aleatório',
          'funcao': 'Resposta aleatória',
          'horario': schedule[generateRandomNumber(schedule.length)],
          'contrato': `CT-0${generateRandomNumber(22)}-${generateRandomNumber(1000)}`,
          'escala': daytimeScale[generateRandomNumber(daytimeScale.length)],
        },
        'uniforme': {
          'quantidade': generateRandomNumber(5),
          'cor': outfitColors[generateRandomNumber(outfitColors.length)],
          'pecas': {
            'camiseta': {
              'tamanho': outfitSizes[generateRandomNumber(outfitSizes.length)],
              'novo': isNewOutfit[generateRandomNumber(isNewOutfit.length)],
            },
            'calca': {
              'tamanho': outfitSizes[generateRandomNumber(outfitSizes.length)],
              'novo': isNewOutfit[generateRandomNumber(isNewOutfit.length)],
            },
            'calcado': {
              'tamanho': shoesSizes[generateRandomNumber(shoesSizes.length)],
              'novo': isNewOutfit[generateRandomNumber(isNewOutfit.length)],
            },
          }
        }
      },
    });
  });

  return newData;
};

module.exports = { randomData };