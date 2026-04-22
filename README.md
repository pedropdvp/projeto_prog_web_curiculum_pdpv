# Website do Curriculum - Pedro Dinis Varela Pinto

**Live:** [https://pedropdvp.github.io/projeto_prog_web_curiculum_pdpv/](https://pedropdvp.github.io/projeto_prog_web_curiculum_pdpv/)

---

## Estrutura do Projeto

```
projeto_prog_web_curiculum_pdpv/
├── index.html              # Pagina principal - Summary, Contactos e Index
├── css/
│   ├── reset.css            # Reset CSS (box-sizing, margens, resets base)
│   ├── layout.css           # Layout: sidebar fixa + conteudo principal + responsivo
│   ├── components.css       # Componentes: cards, timeline, tabelas, tags, botoes
│   └── theme.css            # Tema: cores light/dark com CSS custom properties
├── js/
│   └── script.js            # Dark mode toggle, menu mobile, navegacao ativa
└── pages/
    ├── perfil.html                  # Perfil pessoal e resumo
    ├── experiencia.html             # Experiencia Profissional (timeline)
    ├── formacao-academica.html      # Qualificacoes Academicas (timeline)
    ├── formacao.html                # Formacao Profissional (hub com links)
    ├── formacao-crypto.html         # Formacao em Criptomoedas e Blockchain
    ├── formacao-ai.html             # Formacao em Inteligencia Artificial (50+ cursos)
    ├── formacao-marketing.html      # Formacao em Marketing Digital (35+ cursos)
    ├── formacao-energia.html        # Formacao em Energias Renovaveis
    ├── formacao-it.html             # Formacao em IT, Web, Redes e Programacao
    ├── formacao-empreendedorismo.html  # Formacao em Empreendedorismo
    ├── formacao-soft-skills.html    # Formacao em Soft Skills (50+ cursos)
    ├── competencias.html            # Competencias (hub com links)
    ├── competencias-tecnicas.html   # Competencias Tecnicas (tags)
    ├── competencias-aplicadas.html  # Aplicacao de Competencias
    ├── competencias-crypto.html     # Competencias em Crypto (tags interativas)
    ├── competencias-ai.html         # Competencias em IA (tags)
    ├── competencias-pessoais.html   # Competencias Pessoais
    ├── objetivos.html               # Principais Objetivos Alcancados
    ├── seminarios.html              # Seminarios e Visitas
    ├── idiomas.html                 # Idiomas (tabela com niveis)
    └── contactos.html               # Contactos
```

## Ficheiros (27 no total)

| Ficheiro | Conteudo |
|----------|----------|
| `index.html` | Pagina principal - Summary, Contactos e Index com links |
| `css/reset.css` | Reset CSS base (box-sizing, margens zero, resets de links/listas) |
| `css/layout.css` | Sidebar fixa 260px, conteudo principal, menu hamburger responsivo |
| `css/components.css` | Cards, timelines, tabelas, skill tags, index grid, botoes |
| `css/theme.css` | Sistema de cores com CSS custom properties (light + dark mode) |
| `js/script.js` | Toggle dark mode, menu mobile, highlight navegacao ativa |
| `pages/perfil.html` | Perfil pessoal e resumo de competencias |
| `pages/experiencia.html` | Experiencia Profissional (timeline interativa) |
| `pages/formacao-academica.html` | Qualificacoes Academicas (timeline) |
| `pages/formacao.html` | Formacao Profissional (hub com links para sub-paginas) |
| `pages/formacao-crypto.html` | Formacao em Criptomoedas e Blockchain |
| `pages/formacao-ai.html` | Formacao em Inteligencia Artificial (50+ cursos) |
| `pages/formacao-marketing.html` | Formacao em Marketing Digital (35+ cursos) |
| `pages/formacao-energia.html` | Formacao em Energias Renovaveis |
| `pages/formacao-it.html` | Formacao em IT, Web, Redes e Programacao |
| `pages/formacao-empreendedorismo.html` | Formacao em Empreendedorismo |
| `pages/formacao-soft-skills.html` | Formacao em Soft Skills (50+ cursos) |
| `pages/competencias.html` | Competencias (hub com links para sub-paginas) |
| `pages/competencias-tecnicas.html` | Competencias Tecnicas (tags interativas) |
| `pages/competencias-aplicadas.html` | Aplicacao de Competencias Tecnicas |
| `pages/competencias-crypto.html` | Competencias em Crypto (tags interativas) |
| `pages/competencias-ai.html` | Competencias em IA (tags) |
| `pages/competencias-pessoais.html` | Competencias Pessoais |
| `pages/objetivos.html` | Principais Objetivos Alcancados |
| `pages/seminarios.html` | Seminarios e Visitas Tecnicas |
| `pages/idiomas.html` | Idiomas (tabela com niveis de proficiencia) |
| `pages/contactos.html` | Contactos e informacao de contacto |

## Funcionalidades

- **Sidebar fixa** com navegacao lateral presente em todas as paginas
- **Dark mode** com toggle e persistencia em localStorage
- **Menu hamburger** responsivo para dispositivos moveis (breakpoint 768px)
- **CSS modular** separado em 4 ficheiros (reset, layout, components, theme)
- **CSS custom properties** para sistema de cores e temas
- **Design responsivo** (mobile-friendly)
- **Timelines** para experiencia e educacao
- **Tags interativas** para skills e competencias
- **Tabela estilizada** para idiomas com badges coloridos por nivel
- **Gradientes e animacoes subtis** no header
- **Google Fonts** (Inter) para tipografia moderna

## Deployment

O site esta publicado com **GitHub Pages** e disponivel em:

**[https://pedropdvp.github.io/projeto_prog_web_curiculum_pdpv/](https://pedropdvp.github.io/projeto_prog_web_curiculum_pdpv/)**

Para replicar o deployment:
1. Criar um repositorio no GitHub (publico)
2. Fazer push dos ficheiros do projeto
3. Ativar o GitHub Pages em Settings > Pages > Source: branch `main`, pasta `/`

O website ficara disponivel num URL como:
`https://SEU-USERNAME.github.io/NOME-DO-REPOSITORIO/`
