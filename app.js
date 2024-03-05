const personagens = ["Homer Simpson",
  "Marge Simpson",
  "Bart Simpson",
  "Lisa Simpson",
  "Maggie Simpson",
  "Ned Flanders",
  "Moe Szyslak",
  "Montgomery Burns",
  "Krusty, o Palhaço", ,
  "Montgomery Burns",
  "Krusty, o Palhaço",
  "Apu Nahasapeemapetilon"
];

function mostrarNaTela(tag, texto) {
  const tela = document.querySelector(tag);
  tela.innerHTML = texto;

}

mostrarNaTela('h1', 'Descubra quais personagens estão em The Simpsons! ');

function limparInput() {
  const nomeBuscado = document.querySelector('input');
  nomeBuscado.value = "";
}


function buscarPersonagem() {
  const nomeBuscado = document.querySelector('input').value.trim().toLowerCase();
  if (nomeBuscado === "") {
    mostrarNaTela('h1', 'Por favor, insira um nome para buscar!');
    return;
  }
  const resultado = personagens.filter(nome => nome.toLowerCase().includes(nomeBuscado));
  if (resultado.length === 0) {
    mostrarNaTela('h1', `Esse personagem não faz parte de The Simpsons!`);
  } else {
    mostrarNaTela('h1', `${resultado} está em The Simpsons!`);
  }
  limparInput();
}
