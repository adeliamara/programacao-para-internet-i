import urllib.request

f = open('imagem.jpg','wb')
f.write(urllib.request.urlopen('https://img.freepik.com/fotos-gratis/close-de-um-pato-perto-de-um-lago-em-um-zoologico_181624-51048.jpg?w=1380&t=st=1677106664~exp=1677107264~hmac=12272bb65595bdefa12921e8a5a1b318eb2dd110c85cf1b73161855f3bf5a02c').read())
f.close()

print("download successful")