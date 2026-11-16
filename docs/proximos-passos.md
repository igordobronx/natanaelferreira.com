# Site Natanael Ferreira — estado e próximos passos

Anotado em 14/11/2026. Nada aqui foi decidido ainda, exceto o que está em "Já feito".

## Já feito

- Site estático (HTML, CSS e JS puro, sem build) com cinco páginas: `index.html`, `bio.html`, `agenda.html`, `media.html`, `contact.html`.
- Publicado na Vercel em https://natanaelferreiracom.vercel.app.
- Projeto da Vercel conectado ao repositório https://github.com/igordobronx/natanaelferreira.com. Todo `git push` na `main` publica sozinho.
- A agenda e as cidades do ticker ficam nas listas `CONCERTS` e `CITIES` no topo de `js/main.js`. A agenda está com placeholders `[DATE]`, `[VENUE]`, `[CITY, COUNTRY]`, `[PROGRAMME]`.
- O formulário de booking em `contact.html` abre o app de e-mail do visitante com a mensagem preenchida para natanaelviola@gmail.com. Não há backend.

## Decisão pendente 1 — formulário de booking

Problema: o formulário atual depende de o visitante ter app de e-mail configurado. Em computador com webmail o clique pode não abrir nada e o pedido se perde.

Não precisa de backend próprio. Opções:

- **Formspree ou Web3Forms (recomendado).** O formulário envia para o serviço, que repassa para o e-mail do Natanael. Funciona em qualquer hospedagem estática, tem plano gratuito. Troca de poucas linhas em `contact.html` e `js/main.js`. O visitante vê "enquiry sent" na própria página.
- **Netlify Forms.** Mesma ideia, mas só serve se o site for hospedado na Netlify. Como o site está na Vercel, não se aplica hoje.

O que falta para fazer: criar a conta no serviço com o e-mail do Natanael e passar o identificador do formulário.

## Decisão pendente 2 — painel administrativo

Pergunta a responder primeiro: quem vai atualizar a agenda?

- Se for o Igor: não precisa de painel. Editar `CONCERTS` em `js/main.js` e dar push já publica.
- Se for o Natanael, sozinho, pelo celular: vale a pena, mas só para a agenda. Bio, fotos e vídeos mudam poucas vezes por ano.

Opções, da mais simples à mais completa:

1. **Planilha do Google como painel (recomendado).** Colunas: data, sala, cidade, programa, link de ingresso. O site lê a planilha publicada e monta a agenda. Sem login, sem servidor, sem custo. Ponto fraco: linha mal preenchida aparece no site como foi digitada. Troca no site: a agenda passa a vir da planilha em vez da lista `CONCERTS`.
2. **CMS em cima do GitHub (Decap ou Pages CMS).** Tela `/admin` com formulário, grava no repositório e dispara o deploy. Permite editar também bio e fotos. Exige conta do Natanael no GitHub e configuração de login. Cada alteração leva cerca de um minuto para aparecer.
3. **Painel próprio com banco de dados.** Login, banco e funções na Vercel. Controle total, mas é um backend para manter e proteger. Não se justifica para este site.

## Outras pendências

- **Domínio.** `natanaelferreira.com` ainda aponta para o Wix. Para trocar: adicionar o domínio no projeto da Vercel e mudar o DNS onde ele está registrado. Precisa do acesso do Natanael.
- **Datas reais de concertos**, com sala, cidade, programa e link de ingresso.
- **Fotos em alta resolução.** As sete atuais são prints de cerca de 700 px.
- **Vídeo de hero dedicado**: vertical 1080×1920 e horizontal 1920×1080, close, luz quente, 15 a 20 s. Os atuais são gravações de plateia tiradas dos reels do Instagram.
- **Confirmar legendas**: a da recepção com a rainha dos belgas (veio só do nome do arquivo), "Backstage with the conductor", "Recital with piano", "Soloist with string ensemble".
- **Lista real de cidades** para o ticker. As atuais foram deduzidas da biografia.
- **Confirmar com o Natanael** que os dois reels completos podem ficar hospedados no site.
- **Versões PT e FR.** O texto está só em inglês.
- **Fotos editoriais em preto e branco** do site antigo, links de vídeos específicos do YouTube, foto de capa para a Agenda, material de imprensa.
- O `.gitignore` criado pela Vercel ainda não está commitado.
