function alternarSerieFilme(id) {

    document.getElementsByClassName("principal-movie")[0].style.backgroundSize = "cover";
    switch (id) {
        case 'img1':
            document.getElementsByClassName("principal-movie")[0].style.background = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/BB/capa-bb.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "BREAKING BAD"
            document.getElementsByClassName("desc")[0].innerHTML = "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.";
            break;
        case 'img2':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/GuerraCivil/capa-civilWar.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "CAPITÃO AMÉRICA: GUERRA CIVIL"
            document.getElementsByClassName("desc")[0].innerHTML = "O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark, o Homem de Ferro.";
            break;
        case 'img3':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/Hobbit/capa-hobbit.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "O HOBBIT: A BATALHA DOS CINCO EXÉRCITOS"
            document.getElementsByClassName("desc")[0].innerHTML = "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.";
            break;
        case 'img4':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/HOC/capa-HOC.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "HOUSE OF CARDS"
            document.getElementsByClassName("desc")[0].innerHTML = ">Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.";
            break;
        case 'img5':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/House/capa-house.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "DR. HOUSE"
            document.getElementsByClassName("desc")[0].innerHTML = "Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.";
            break;
        case 'img6':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/Pokemon/capa-pokemon.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "POKÉMON"
            document.getElementsByClassName("desc")[0].innerHTML = "Explore o mundo de Pokémon com Ash e seu parceiro Pikachu em busca do sonho do menino de ser um mestre Pokémon.";
            break;
        case 'img7':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/Smalville/capa-smallville.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "SMALLVILLE"
            document.getElementsByClassName("desc")[0].innerHTML = "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.";
            break;
        case 'img8':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/StarWars/capa-starwars.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "STAR WARS: A ASCENÇÃO SKYWALKER"
            document.getElementsByClassName("desc")[0].innerHTML = "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.";
            break;
        case 'img9':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/Supernatural/capa-supernatural.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "SUPERNATURAL"
            document.getElementsByClassName("desc")[0].innerHTML = "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.";
            break;
        case 'img10':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/TUA/capa-TUA.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "THE UMBRELLA ACADEMY"
            document.getElementsByClassName("desc")[0].innerHTML = "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.";
            break;
        case 'img11':
            document.getElementsByClassName("principal-movie")[0].style.backgroundImage = "linear-gradient(rgba(150,150,150,0.5),rgba(200,200,200,0.8)100%),url(imgs/Vingadores/capa-vingadores.jpg)";
            document.getElementsByClassName("title")[0].innerHTML = "VINGADORES: GUERRA INFINITA"
            document.getElementsByClassName("desc")[0].innerHTML = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.";
            break;
    }

}