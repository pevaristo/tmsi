
const rssUrl = 'https://www.sbv.ifsp.edu.br/todas-noticias-publicadas?format=feed&type=rss';        
// Usamos nesse exemplo o serviço rss2json para converter o XML em JSON e evitar bloqueio de CORS
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

// comente a proxima linha para tirar o atraso no carregamento das noticias
setTimeout(() => {
        
fetch(apiUrl)
.then(res => res.json())
.then(dados => {
    noticias_section = document.getElementById("sbv");
    console.log(dados);
    const ultimas_noticias = dados.items.map(item => `<article><a href="${item.link}" target="_blank"><h4>${item.title}</h4></a><br><img src="${item.thumbnail}"/><br><p>${item.description}</p></article>`).join('');
    noticias_section.innerHTML = ultimas_noticias;
})
.catch(error => console.log(error.message))
.finally(document.getElementById('loading').style.display = 'none');


// comente a proxima linha para tirar o atraso no carregamento das noticias
}, 2500);

