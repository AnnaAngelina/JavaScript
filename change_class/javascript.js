var lista = document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function() {
        document.querySelectorAll('li').forEach(com_classe => com_classe.classList.remove('ativo'));
        li.classList.add('ativo');
        var conteudoid = li.getAttribute("data-tab");
        var conteudo = document.getElementById(conteudoid);
        document.querySelectorAll('.div_selecionada').forEach(div => { div.classList.remove('div_selecionada'); div.classList.add('nao_selecionada');});
        conteudo.classList.remove('nao_selecionada');
        conteudo.classList.add('div_selecionada');
    });
});