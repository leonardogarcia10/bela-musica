//depois de 10 segundos, pergunta se quer receber notificações e promoções

setTimeout(function () {
    if (confirm("Gostaria de receber promoções e notificações no seu WhatsApp?")) {
        prompt("Digite seu numero para receber promoções e notificações");
    } else {
        alert("Você pode se inscrever a qualquer momento");
    }
}, 10000);