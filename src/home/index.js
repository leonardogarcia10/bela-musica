'use strict';
//depois de 10 segundos, pergunta se quer receber notificações e promoções

setTimeout(function () {
    // eslint-disable-next-line max-len
    if (confirm('Gostaria de receber promoções e notificações no seu WhatsApp?')) {
        prompt('Digite seu numero para receber promoções e notificações');
    } else {
        alert('Você pode se inscrever a qualquer momento');
    }
}, 10000);

const p1 = document.getElementById('produto1');

p1.addEventListener('mouseover', botão);
p1.addEventListener('mouseout', sair);

function botão() {
    p1.style.backgroundColor = '#FE4C4C';
}

function sair() {
    p1.style.backgroundColor = '#FFC107';
}

// eslint-disable-next-line no-undef
$('#corpo').addClass('minha-classe');

/*$('#corpo').removeClass('minha-classe');*/




