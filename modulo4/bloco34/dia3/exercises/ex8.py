# Exercício 8 Agora um desafio, vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as
# imagens de todas as bandeiras.
# 🦜 Faça requisições para as URLs das imagens e escreva seus conteúdos em
# arquivos binários. São 206 ao total.

import requests
import parsel

URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = parsel.Selector(response.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for url in flags_url:
    print(url)
    filename = "./img/" + url.split("/")[-1]
    image = requests.get("http:" + url)
    image_content = image.content
    with open(filename, "wb") as file:
        file.write(image_content)
