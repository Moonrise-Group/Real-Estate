const PDF = {
  font: {
    calibri: pdfMake.fonts = {
      Calibri: {
        normal: 'calibri.ttf',
        bold: 'calibri-bold.ttf',
        italics: 'calibri-italic.ttf',
        bolditalics: 'calibri-bold-italic.ttf',
      }
    }
  },
}

const createPDF = () => {
  const vendedor = document.getElementById('nomeVendedor').value.toUpperCase();
  const nacionalidadeVendedor = document.getElementById('nacionalidadeVendedor').value.toUpperCase();
  const estadoCivilVendedor = document.getElementById('estadoCivilVendedor').value.toUpperCase();
  const trabalhoVendedor = document.getElementById('trabalhoVendedor').value.toUpperCase();
  const cpfVendedor = document.getElementById('cpfVendedor').value.toUpperCase();
  const enderecoVendedor = document.getElementById('enderecoVendedor').value.toUpperCase();
  const numeroVendedor = document.getElementById('numeroVendedor').value.toUpperCase();
  const bairroVendedor = document.getElementById('bairroVendedor').value.toUpperCase();
  const cidadeVendedor = document.getElementById('cidadeVendedor').value.toUpperCase();

  const comprador = document.getElementById('nomeComprador').value.toUpperCase();
  const nacionalidadeComprador = document.getElementById('nacionalidadeComprador').value.toUpperCase();
  const estadoCivilComprador = document.getElementById('estadoCivilComprador').value.toUpperCase();
  const trabalhoComprador = document.getElementById('trabalhoComprador').value.toUpperCase();
  const cpfComprador = document.getElementById('cpfComprador').value.toUpperCase();
  const enderecoComprador = document.getElementById('enderecoComprador').value.toUpperCase();
  const numeroComprador = document.getElementById('numeroComprador').value.toUpperCase();
  const bairroComprador = document.getElementById('bairroComprador').value.toUpperCase();
  const cidadeComprador = document.getElementById('cidadeComprador').value.toUpperCase();

  const tipoImovel = document.getElementById('tipoImovel').value.toUpperCase();
  const areaTotalImovel = document.getElementById('areaTotalImovel').value.toUpperCase();
  const areaTotalImovelExtenso = document.getElementById('areaTotalImovelExtenso').value.toUpperCase();
  const valorImovel = document.getElementById('valorImovel').value.toUpperCase();
  const valorImovelExtenso = document.getElementById('valorImovelExtenso').value.toUpperCase();
  const enderecoImovel = document.getElementById('enderecoImovel').value.toUpperCase();
  const cidadeImovel = document.getElementById('cidadeImovel').value.toUpperCase();
  const especificacoesImovel = document.getElementById('especificacoesImovel').value.toUpperCase();
  const dataPagamentoImovel = document.getElementById('dataPagamentoImovel').value.toUpperCase();
  const dataContrato = document.getElementById('dataContrato').value.toUpperCase();

  const PDFContrato = {
    content: [
      {
        image: 'logoAldaBrito.png',
        width: 240,
        alignment: 'center',
        margin: [0, 0, 0, 0],
      },

      {
        text: 'CONTRATO PARTICULAR DE COMPRA E VENDA DE IMÓVEL',
        fontSize: 18,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      },
      '\n',

      {
        text: `Pelo presente instrumento particular, de um lado ${vendedor}, ${nacionalidadeVendedor}, ${estadoCivilVendedor}, ${trabalhoVendedor}, inscrito(a) sob o Cpf nº: ${cpfVendedor}, estabelecido(a): ${enderecoVendedor}, Nº: ${numeroVendedor}, Bairro: ${bairroVendedor}, ${cidadeVendedor}, de ora em diante denominado vendedor(a), e de outro lado, ${comprador}, ${nacionalidadeComprador}, ${estadoCivilComprador}, ${trabalhoComprador}, portador(a) do Cpf: ${cpfComprador}, residente e domiciliado(a) à Rua: ${enderecoComprador}, Nº: ${numeroComprador}, Bairro: ${bairroComprador}, ${cidadeComprador}, de ora em diante denominada comprador(a), têm entre si justo e contratado o que segue, que se obrigam a cumprir por si, seus herdeiros e sucessores.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `DO OBJETO DO CONTRATO`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA PRIMEIRA - O presente contrato tem como OBJETO a venda entre as partes do(a) ${tipoImovel} com a área de ${areaTotalImovel} m2. (${areaTotalImovelExtenso}), resolve vendê-lo ao COMPRADOR, pelo valor de R$ ${valorImovel} (${valorImovelExtenso}), livre de qualquer vício ou ônus.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CLÁSULA SEGUNDA - O terreno ora vendido está localizado na(o): ${enderecoImovel}, com as seguintes especificações: ${especificacoesImovel}.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `DAS OBRIGAÇÕES`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA TERCEIRA - Pelo presente contrato o VENDEDOR se obriga a transferir o domínio do imóvel acima descrito e o comprador a pagar o preço em dinheiro, cujo valor ora supracitado.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CLÁSULA QUARTA - Será de responsabilidade do VENDEDOR o pagamento dos impostos, taxas e despesas que incidam sobre o imóvel, momento em que esta obrigação passará ao COMPRADOR.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CLÁSULA QUINTA - O COMPRADOR se responsabilizará pelas despesas com a escritura e registro do imóvel, a ser realizada quando da quitação do valor acertado neste instrumento.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CLÁSULA SEXTA - Até a efetiva entrega do imóvel ao comprador, o vendedor se responsabiliza por quaisquer danos eventualmente ocorridos no imóvel.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CLÁSULA SÉTIMA - Independente do prazo convencionado entre as partes para o pagamento, se antes da efetiva entrega do imóvel o comprador se tornar insolvente, o vendedor é autorizado a reter o imóvel até que o comprador apresente garantias de que irá efetuar o pagamento no dia previsto.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `DA MULTA`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA OITAVA - Caso alguma das partes não cumpra o disposto nas cláusulas estabelecidas neste instrumento, responsabilizar-se-á pelo pagamento de multa equivalente a 6% do valor da venda do imóvel.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `DO PAGAMENTO`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA NONA - Por força deste instrumento, o COMPRADOR pagará ao VENDEDOR a quantia de R$ ${valorImovel} (${valorImovelExtenso}), à vista, no dia ${dataPagamentoImovel}, valores que o VENDEDOR declara ter recebido na presente data e que dá rasa e geral quitação.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `DO FORO`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA DÉCIMA - Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca de (${cidadeImovel}).`,
        fontSize: 12,
      },
      '\n',

      {
        text: `Assim, por estarem assim justos e contratados, firmam o presente instrumento, em duas vias de igual teor, juntamente com 2 (duas) testemunhas.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `CONDIÇÕES GERAIS`,
        bold: true
      },
      '\n',

      {
        text: `CLÁSULA DÉCIMA PRIMEIRA - O presente contrato passa a valer a partir da assinatura pelas partes, obrigando-se a ele os herdeiros ou sucessores das mesmas.`,
        fontSize: 12,
      },
      '\n',

      {
        text: `${cidadeImovel}, ${dataContrato}`,
        fontSize: 12,
      },
      '\n\n\n',

      {
        text: `______________________________________\n${vendedor}   |      Cpf: ${cpfVendedor}`,
        alignment: 'center',
      },
      '\n',

      {
        text: `______________________________________\n${comprador}  |      Cpf: ${cpfComprador}`,
        alignment: 'center',
      },
      '\n',

      {
        text: '_______________________________________\n\n2 TESTEMUNHAS\n\n',
        alignment: 'center',
      },

      {
        text: '_______________________________________',
        alignment: 'center',
      },
    ],

    defaultStyle: {
      font: 'Calibri',
      fontSize: 15,
    },
  }

  pdfMake.createPdf(PDFContrato).open()
}