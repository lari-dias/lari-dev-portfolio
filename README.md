# Lari Dev

Portfólio Full Stack e apresentação de serviços de desenvolvimento web, com foco profissional em Back-end Java.

## Executar localmente

```sh
npm install
npm run dev
```

No PowerShell com restrição de scripts, utilize `npm.cmd` no lugar de `npm`.

## Verificações e produção

```sh
npm run lint
npm run build
npm run preview
```

O build gera a pasta `dist`. Publique somente essa pasta.

O plugin local em `vite.config.ts` desativa a cópia automática de `public` e copia seus arquivos com exclusão de `public/references`. As referências continuam disponíveis localmente e não integram o build. As imagens originais dos projetos e a foto são preservadas.

## Organização

- `src/components/layout`: cabeçalho e rodapé.
- `src/components/ui`: títulos, cards e galeria acessível.
- `src/sections`: seções da landing page.
- `src/data/portfolio.ts`: links, habilidades, projetos Java e formações.
- `src/index.css`: identidade visual, responsividade e preferências de movimento.

## Conteúdo pendente

E-mail, WhatsApp e LinkedIn não foram fornecidos. O contato apresenta somente o GitHub confirmado, sem formulário ou envio simulado. Os CTAs de orçamento direcionam para essa seção; um canal direto deve ser adicionado quando estiver disponível.

O projeto de advocacia não possui link público ou repositório informado. O BFF está identificado como em desenvolvimento e não exibe link inventado. A trajetória não atribui datas às formações.

Quando o domínio definitivo estiver disponível, complete a URL canônica e os metadados sociais com URLs absolutas.

## Interações

O menu mobile informa seu estado, fecha por Escape e permite navegação por teclado. A galeria possui cinco miniaturas, controles anterior/próximo e ampliação em diálogo nativo. No diálogo, use as setas do teclado para navegar e Escape para fechar; o foco retorna ao botão que abriu a imagem. As animações e o scroll suave respeitam a preferência por movimento reduzido.
