#2) Baixe uma página e exiba o conteúdo de uma determinada tag lida pelo teclado.
import urllib.request
from bs4 import BeautifulSoup

def fetch_html_from_url(url):

    #Consulte o site e retorne o html para a variável 'page'
    page_html = urllib.request.urlopen(url)
    
    return page_html

def search_tag_from_html(url):
    html_page = fetch_html_from_url(url)

    soup = BeautifulSoup(html_page, 'html5lib')
    print(soup)
    
    tag_buscada = input("Selecione a tag desejada: ")
    
    try:
        list_tags = soup.find_all(tag_buscada)
    
        for tag in list_tags:
            print(tag)
    except:
        print(Exception)
    
        
def main():
    search_tag_from_html("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal")

    


if __name__ == '__main__':
    main()
