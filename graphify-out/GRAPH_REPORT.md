# Graph Report - natanaelferreira.com  (2026-11-14)

## Corpus Check
- Corpus is ~2,897 words - fits in a single context window. You may not need a graph.

## Summary
- 63 nodes · 109 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Deploy e painel administrativo
- Media e Moments on stage
- Home e agenda
- Booking e contato
- Biografia e premios
- Codigo main.js
- Hero em video
- Credenciais
- Residencia Queen Elisabeth
- Formacao em Genebra
- Ticker de cidades
- Formulario de booking (decisao)
- Retrato da bio

## God Nodes (most connected - your core abstractions)
1. `Home page (index.html)` - 12 edges
2. `Estado e proximos passos (14/11/2026)` - 11 edges
3. `Booking and contact page (contact.html)` - 9 edges
4. `Natanael Ferreira (violist, born in Goias, Brazil)` - 9 edges
5. `Photographs gallery (7 photos)` - 9 edges
6. `Moments on stage (horizontal scroll-snap reel)` - 8 edges
7. `Credentials list` - 7 edges
8. `CONCERTS` - 6 edges
9. `Biography page (bio.html)` - 6 edges
10. `Performances: two self-hosted videos (recital, ensemble)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Full concert list with venue, programme and tickets` --shares_data_with--> `CONCERTS`  [EXTRACTED]
  agenda.html → js/main.js
- `Photographs gallery (7 photos)` --references--> `Photo: viola soloist standing in front of an orchestra`  [EXTRACTED]
  media.html → assets/img/orchestra-soloist.jpg
- `Photographs gallery (7 photos)` --references--> `Photo: outdoor portrait in camel coat with viola case`  [EXTRACTED]
  media.html → assets/img/portrait.jpg
- `Opcao 1: planilha do Google como painel da agenda (recomendado)` --references--> `CONCERTS`  [EXTRACTED]
  docs/proximos-passos.md → js/main.js
- `Upcoming concerts (first 3 rows)` --shares_data_with--> `CONCERTS`  [EXTRACTED]
  index.html → js/main.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Opcoes de painel administrativo** — docs_proximos_passos_planilha_google, docs_proximos_passos_cms_github, docs_proximos_passos_painel_proprio [EXTRACTED 1.00]

## Communities (13 total, 2 thin omitted)

### Community 0 - "Deploy e painel administrativo"
Cohesion: 0.31
Nodes (10): Opcao 2: CMS em cima do GitHub (Decap ou Pages CMS), Pendencia: datas reais de concertos, Estado e proximos passos (14/11/2026), Pendencia: dominio natanaelferreira.com ainda aponta para o Wix, Repositorio GitHub igordobronx/natanaelferreira.com (push na main publica), Opcao 3: painel proprio com banco de dados, Opcao 1: planilha do Google como painel da agenda (recomendado), Deploy na Vercel: natanaelferreiracom.vercel.app (+2 more)

### Community 1 - "Media e Moments on stage"
Cohesion: 0.31
Nodes (10): Photo: backstage in concert dress with the conductor, Photo: handshake with the conductor after a performance, Video poster: soloist with string ensemble, Video poster: recital with piano, Photo: white shirt, playing beside the conductor podium, Pendencia: fotos em alta resolucao (atuais ~700 px), Moments on stage (horizontal scroll-snap reel), Media page (media.html) (+2 more)

### Community 2 - "Home e agenda"
Cohesion: 0.50
Nodes (5): Full concert list with venue, programme and tickets, Agenda page (agenda.html), Home page (index.html), Footer social links (Instagram, Spotify, YouTube), Upcoming concerts (first 3 rows)

### Community 3 - "Booking e contato"
Cohesion: 0.60
Nodes (5): Photo: close view playing viola under warm stage light, Booking enquiry form (opens visitor email app via mailto), Direct email natanaelviola@gmail.com, Booking and contact page (contact.html), Booking block: available for concerts, festivals and residencies worldwide

### Community 4 - "Biografia e premios"
Cohesion: 0.40
Nodes (5): Collaborators: Dumay, Hoffman, Braley, Pasquier, Demarquette, Gatto, Coppey, Gringolts, Holliger, Natanael Ferreira (violist, born in Goias, Brazil), Prizes, Academie Ravel 2015, First prize, Campos do Jordao Winter Festival 2013, Third prize, Rahn Musikpreis 2018

### Community 5 - "Codigo main.js"
Cohesion: 0.40
Nodes (3): head, menuBtn, ticker

### Community 6 - "Hero em video"
Cohesion: 0.50
Nodes (4): Hero still, desktop: soloist with string ensemble, Hero still, mobile: recital in wood-panelled hall, Pendencia: video de hero dedicado (vertical e horizontal), Hero: full-bleed video with cascading name

### Community 7 - "Credenciais"
Cohesion: 0.50
Nodes (4): Photo: viola soloist standing in front of an orchestra, Utopia Orchestra, Verbier Festival Chamber Orchestra, Credentials list

### Community 8 - "Residencia Queen Elisabeth"
Cohesion: 0.67
Nodes (3): Photo: reception in a wood-panelled foyer (caption: Queen of the Belgians), Queen Elisabeth Music Chapel (Artist in Residence), Pendencia: confirmar legendas das fotos e videos

### Community 9 - "Formacao em Genebra"
Cohesion: 0.67
Nodes (3): Gabor Takacs (chamber music teacher), Haute Ecole de Musique de Geneve, Miguel da Silva (viola teacher)

### Community 10 - "Ticker de cidades"
Cohesion: 0.67
Nodes (3): Pendencia: lista real de cidades do ticker, Cities ticker, CITIES

## Knowledge Gaps
- **10 isolated node(s):** `Footer social links (Instagram, Spotify, YouTube)`, `Miguel da Silva (viola teacher)`, `Gabor Takacs (chamber music teacher)`, `First prize, Campos do Jordao Winter Festival 2013`, `Prizes, Academie Ravel 2015` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 14 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home page (index.html)` connect `Home e agenda` to `Media e Moments on stage`, `Booking e contato`, `Codigo main.js`, `Hero em video`, `Credenciais`, `Ticker de cidades`, `Retrato da bio`?**
  _High betweenness centrality (0.279) - this node is a cross-community bridge._
- **What connects `Footer social links (Instagram, Spotify, YouTube)`, `Miguel da Silva (viola teacher)`, `Gabor Takacs (chamber music teacher)` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Estado e proximos passos (14/11/2026)` connect `Deploy e painel administrativo` to `Media e Moments on stage`, `Hero em video`, `Residencia Queen Elisabeth`, `Ticker de cidades`, `Formulario de booking (decisao)`?**
  _High betweenness centrality (0.215) - this node is a cross-community bridge._
- **Why does `Biography page (bio.html)` connect `Retrato da bio` to `Home e agenda`, `Booking e contato`, `Biografia e premios`, `Codigo main.js`, `Credenciais`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._