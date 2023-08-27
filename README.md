# Next Blog

![screenshot](https://raw.githubusercontent.com/shinditoyama/next-blog/main/public/assets/blog.gif)

## Descrição

Este é um modelo minimalista de blog construído em Next 13, Tailwind CSS e Hygraph CMS.

Se você deseja experimentar o sistema, confira a demonstração anexado no link abaixo:

**live demo: [https://next-blog-xxv.vercel.app/](https://next-blog-xxv.vercel.app/)**

## Tecnologias

- [React](https://react.dev/)
- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next Auth](https://next-auth.js.org/)
- [Hygraph](https://hygraph.com/)

## Instalação

Primeiro clone este repositório na sua máquina local.

```
$ git clone https://github.com/shinditoyama/next-blog.git
$ cd next-blog
```

Instale as dependências. Verifique se você já tem o nodejs e o npm instalado na sua máquina.

```bash
$ npm install # or yarn
```

Ao trabalhar com este repositório localmente com seu próprio projeto, você precisará adicionar o seguinte variável de ambiente ao seu arquivo `.env`:

```bash
$ NEXTAUTH_URL={/* YOUR_KEY */}
$ NEXTAUTH_SECRET={/* YOUR_KEY */}

$ GOOGLE_ID={/* YOUR_KEY */}
$ GOOGLE_SECRET={/* YOUR_KEY */}

$ HYGRAPH_URL={/* YOUR_KEY */}
$ HYGRAPH_TOKEN={/* YOUR_KEY */}
```

Feito isso, execute o projeto.

```bash
$ npm start # or yarn start
```
