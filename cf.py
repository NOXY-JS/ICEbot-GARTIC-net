from bs4 import BeautifulSoup
import cloudscraper
import json
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
scraper = cloudscraper.create_scraper()
url = "https://gartic.com.br/lista_sala.php?x=1734993976282&l=1"
info = scraper.get(url)
data = info.text
rooms = json.loads(data)
c = list(reversed(rooms[0]["c"]))
def fetch_room_info(room_id):
    ru = f'https://gartic.pics/r/roomInfo?id={room_id}'
    res = requests.get(ru, headers={
        'User-Agent': '[11,21,6,6,7,4,2,5,4,22]',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,/;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'DNT': '1',
        'Connection': 'close',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'script',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1'
    })
    return json.loads(res.text)
with ThreadPoolExecutor(max_workers=64) as executor:
    future_to_room = {executor.submit(fetch_room_info, n["i"]): n for n in c}
    for future in as_completed(future_to_room):
        room_info = future.result()
        room_data = future_to_room[future]
        senha = room_info['senha']
        dono = room_info['criador']
        meta = room_info['meta']
        nome_base = room_info['nome_base']
        if room_data["c"]==1:print(f'\033[1;33m {room_data["n"]} | \033[1;32m{room_data["q"]}/{room_data["j"]} | \033[1;36mID: {room_data["i"]} | \033[1;35msenha: {senha} | \033[1;33mbase: {nome_base} | \033[1;32mmeta: {meta} | \033[1;30mcriador: {dono}')
        else: print(f'\033[1;33m {room_data["n"]} | \033[1;32m{room_data["q"]}/{room_data["j"]} | \033[1;36mID: {room_data["i"]} | \033[1;35msenha: {senha} | \033[1;31mSOMENTE CADASTRADOS')