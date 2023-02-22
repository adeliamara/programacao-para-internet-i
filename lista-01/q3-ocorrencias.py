#2) Baixe uma página e exiba o conteúdo de uma determinada tag lida pelo teclado.
import requests
from bs4 import BeautifulSoup

def fetch_html_from_url(url):

    page_html = requests.get(url)
    
    return page_html



def search_termo_from_html(termo, url):
    
    html_page = fetch_html_from_url(url)

    soup = BeautifulSoup(html_page.text)
    for script in soup(["script", "style"]):
        script.extract()
        
    texto = soup.get_text() 
     
    index = texto.find(termo)
    
    start_point = index - 20
    end_point = index + 20 + len(termo) - 1
    
    if(index - 20 < 0):
        start_point = 0
    if(end_point > len(texto)):
        end_point = len(texto) - 1 
    
        
    print(texto[start_point:end_point])
    
        
def main():
    site = input('Digite a url do site que deseja buscar: ')
    termo = input('Digite o termo que deseja buscar: ')
    

    search_termo_from_html(termo, site)


if __name__ == '__main__':
    main()
