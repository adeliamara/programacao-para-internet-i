import requests
from bs4 import BeautifulSoup

def search_contents_from_url(url):
    response = requests.get(url)
    html = BeautifulSoup(response.text, 'html.parser')
    return html.get_text()


def main():
    palavra_buscada = input('Digite a palavra que deseja buscar: ')
    url =(f'https://www.google.com.br/search?q={palavra_buscada}')

    conteudo = search_contents_from_url(url)
    print(conteudo)


if __name__ == "__main__":
    main()