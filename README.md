
## ICEbot GARTIC.NET (PWA)

### Como usar: 

Para usar o bot, baixe o arquivo .ZIP presente no repositório e depois use algum navegador que possua suporte para extensões no seu celular (exemplo: Kiwi Browser, Firefox) e quando tiver instalado a extensão nele, vá para o gartic PWA e veja se funcionou. Depois instale o termux em seu celular para rodar o script, instale o Node.js no terminal e execute 
``` 
git clone https://github.com/NOXY-JS/ICEbot-GARTIC-net.git
```
para clonar o repositório, então digite 
```
npm install ws
```
para instalar as dependências e após isso 
```
cd ICEbot-GARTIC-net
```
 e execute o comando 
```
node
.load bot__.js 
```
e o bot estará ativado para usar.

Atualize a página do gartic e comece a usar o bot para ver se funcionou.


O bot só funcionará se o script de bot estiver rodando no terminal, caso contrário não terá efeito algum sobre o jogo. Você pode rodar o servidor no seu pc ou em outro dispositivo caso não queira rodar ele no termux pelo celular. Basta executar os mesmos passos citados anteriormente mas se você já tiver rodado o script anteriormente e instalado os pacotes não precisa rodar de novo, somente se você quiser atualizá-los.

Esse script foi feito especificamente para os usuários do gartic de celular (Gartic PWA), mas ele também pode funcionar no outro porque os dois domínios (gartic.net e gartic.com.br) redirecionam ao mesmo jogo.


Para trocar o avatar do bot, clique em "select avatar" para selecionar o avatar do seu bot.

Existem 37 opções de avatar no jogo contando com o avatar invisível, além disso você pode selecionar um avatar aleatório clicando no ícone de geral presente na lista.

Os comandos presentes nos botões: 

JOIN: Você deve entrar numa sala de gartic para esse comando funcionar, clique no botão JOIN para os bots entrarem na sala.


REPORT: denuncia o desenho

JUMP: pula a vez do bot na partida

MESSAGE: envia uma mensagem no chat do jogo
ANSWER: envia uma mensagem no chat de resposta do jogo

BROADCAST: envia mensagens em ambos os chats de resposta e de mensagem

EXIT: remove os bots da sala

### Lista das salas
Há ainda um script em python no repositório, você pode rodar ele para ver todas as salas incluindo a senha delas e se elas precisam de ser cadastrado para entrar ou não.
Primeiro você deve instalar as dependências caso não tenha instalado ainda em seu terminal no python:

```
pip install requests
pip install beautifulsoup4
pip install cloudscraper
```

após fazer isso execute o script:

```
cd ICEbot-GARTIC-net
python cf.py
```

E você poderá ver todas as salas e a senha delas toda vez que rodar esse script.

### Atualizando os arquivos
Caso os arquivos do repositório sejam atualizados, execute o comando 
```
cd ICEbot-GARTIC-net
git pull origin main
```
e seus arquivos serão atualizados e você poderá usar a versão mais recente do bot (exceto pela extensão que você terá que instalar ela manualmente). 


# Imagens do bot

Listas de avatar
![Screenshot_20250301-124145_Kiwi Browser](https://github.com/user-attachments/assets/ca2ccfd2-f529-4260-a2ee-79c86a4b087e)
![Screenshot_20250301-124148_Kiwi Browser](https://github.com/user-attachments/assets/95250fbf-99bb-4aa9-985c-5de9ac947555)

Usando os comandos dos botões

![Screenshot_20250301-124130_Kiwi Browser](https://github.com/user-attachments/assets/4941c465-e019-424b-9774-a55638c0f72f)
![Screenshot_20250301-124159_Kiwi Browser](https://github.com/user-attachments/assets/340905c2-6e0d-4865-a064-b729f292b61c)
![Screenshot_20250301-124201_Kiwi Browser](https://github.com/user-attachments/assets/e340f105-65a4-4ade-8ed4-ab25297ff7b4)

Vendo as salas

![Screenshot_20250301-151640_Termux](https://github.com/user-attachments/assets/4897dbc4-784c-4474-9133-d5a1251bc512)

Atualizando lista de arquivos


![Screenshot_20250301-153704_Termux](https://github.com/user-attachments/assets/0a4bd0a7-5243-4a15-81a6-5fcb8d43476a)
