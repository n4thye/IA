const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPergunta=document.querySelector(".caixa-perguntas");
const caixaAlternativa=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas =[
    {
           enunciado:"Assim que saiu do colégio você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e aúdios hiper-realistas. Qual é seu primeiro pensamento?",
           alternativas:[
            {
            texto:"Isso é assustador!",
            afirmacao:"No início, eu ficaria com medo do que essa tecnologia pode fazer."
               },
               {
                texto:"Isso é incrível",
                afirmacao:"Sempre quis usar uma IA em meu dia a dia."
               }
           ] 
    }

]