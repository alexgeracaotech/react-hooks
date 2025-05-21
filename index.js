
function useState(estadoAtual){
    return [estadoAtual, function(novoValor){
        return estadoAtual = novoValor;
    }];
}

const [mensagem, setMensagem] = useState("Hello!");

// console.log(mensagem);

// console.log(setMensagem("Cavalo"));

