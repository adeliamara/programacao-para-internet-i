import requests
from bs4 import BeautifulSoup

def search_table_from_url(url):
    response = requests.get(url)
    html = BeautifulSoup(response.text, 'html.parser')

    return html.find('table')

def main():
  
    conteudo = search_table_from_url("https://www.meutimao.com.br/tabela-de-classificacao/campeonato_brasileiro/")
    print(conteudo)


if __name__ == "__main__":
    main()