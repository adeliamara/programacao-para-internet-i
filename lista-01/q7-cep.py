import requests
from bs4 import BeautifulSoup

def search_table_from_url(url):
    response = requests.get(url)
    
    html = BeautifulSoup(response.text, 'html.parser')
    print(html)

    return html.find('table')

def main():

    cep = input("digite o cep apenas com numeros: ")

    cep = cep.replace("-", "").replace(".", "").replace(" ", "")

    url = f'https://viacep.com.br/ws/{cep}/json/'

    response = requests.get(url)
    print(response.json())


if __name__ == "__main__":
    main()

