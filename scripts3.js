const personagens = {
    hannah: {
        imagem: 'hannah.jpg', 
        descricao: 'Hannah Montana é o alter ego de Miley Stewart, uma garota comum que vive uma vida dupla como uma pop star.'
    },
    lily: {
        imagem: 'lily.jpg',  
        descricao: 'Lily Truscott é a melhor amiga e confidente de Miley, que a ajuda a lidar com os desafios de uma vida dupla.'
    },
    jackson: {
        imagem: 'jackson.jpg',  
        descricao: 'Jackson Stewart é o irmão mais velho de Miley, conhecido pelo seu senso de humor bobo e rivalidade entre irmãos.'
    },
    oliver: {
        imagem: 'oliver.jpg',  
        descricao: 'Oliver Oken é um dos melhores amigos de Miley e um grande fã de Hannah Montana antes de descobrir sua identidade secreta.'
    },
    robby: {
        imagem: 'Robby.jpg',  
        descricao: 'Robby Ray Stewart é o pai de Miley e Jackson. Ele também é o empresário e treinador vocal de Hannah Montana.'
    }
};

function mostrarPersonagem(personagem) {
    const imagemPersonagem = document.getElementById('personagem-imagem');
    const descricaoPersonagem = document.getElementById('personagem-descricao');
    const personagemDisplay = document.getElementById('personagem-display');
    
   
    imagemPersonagem.src = personagens[personagem].imagem;
    descricaoPersonagem.textContent = personagens[personagem].descricao;


    imagemPersonagem.style.display = 'block';
    descricaoPersonagem.style.display = 'block';

    personagemDisplay.style.display = 'flex'; 
    personagemDisplay.style.alignItems = 'center';  //
}