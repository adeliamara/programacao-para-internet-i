import urllib.request
from bs4 import BeautifulSoup

def searchUrl():

    url_ifpi = "https://www.ifpi.edu.br"

    page = urllib.request.urlopen(url_ifpi)

    soup = BeautifulSoup(page, 'html5lib')

    #find_all busca todas as ocorrencias
    list_links = soup.find_all('a')
    
    for anchor in list_links:
        print(anchor.get('href'))


if __name__ == '__main__':
    searchUrl()
