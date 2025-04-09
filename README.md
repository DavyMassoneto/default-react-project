# Default Project

Este projeto é um setup base para aplicações React com TypeScript e Vite, incluindo configuração completa de ESLint, Prettier, testes com Vitest, suporte a browser testing com Playwright e arquitetura em camadas clara e escalável.

---

## ✨ Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) + [vitest-browser-react](https://www.npmjs.com/package/vitest-browser-react)
- [Playwright](https://playwright.dev/) (modo browser dos testes)
- [ESLint](https://eslint.org/) com regras opinativas
- [Prettier](https://prettier.io/) com padronização obrigatória

---

## 🚀 Scripts

```bash
pnpm dev           # roda a aplicação em modo desenvolvimento
pnpm build         # builda o projeto para produção
pnpm lint          # executa o lint com ESLint
pnpm test          # executa os testes em modo headless (coverage incluso)
pnpm test:dev      # executa os testes em modo browser interativo
pnpm coverage      # roda os testes com relatório de cobertura
```

---

## 🌎 Organização de Pastas

### `src/`

| Diretório               | Responsabilidade                                                                 |
|-------------------------|----------------------------------------------------------------------------------|
| `ui/`                  | Tudo relacionado a UI/React                                                      |
| `ui/app/`              | Bootstrap, iniciação do app                                                    |
| `ui/components/`       | Componentes reutilizáveis                                                        |
| `ui/hooks/`            | Hooks customizados de UI                                                         |
| `ui/pages/`            | Páginas completas por rota                                                       |
| `ui/router/`           | Configuração e renderização de rotas                                           |
| `ui/styles/`           | Reset global, tokens, variáveis                                                  |
| `ui/theme/`            | Contexto de tema, configurações de design system                                |
| `data/`                | Lógica de acesso a dados: repositórios, services                                 |
| `domain/`              | Regras de negócio e entidades de domínio                                         |
| `errors/`              | Mapas, mensagens e classes de erro                                               |
| `infra/`               | Integrações técnicas externas                                                 |
| `inversify/`           | Injeção de dependência                                                         |
| `shared/`              | Constantes, helpers, schemas reutilizáveis (global)                              |
| `utils/`               | Funções utilitárias de baixo nível                                           |
| `tests/`               | Todos os testes e mocks organizados por domínio                                 |
| `tests/__mocks__/`     | Mocks compartilhados + interfaces                                                |

---

## 🧰 Padrões obrigatórios do projeto

### 📄 Nomenclatura

- Sempre usar `kebab-case` para arquivos e pastas.

### ✏️ React

- Sempre declarar componentes com `const` e tipagem `React.FC`:

```tsx
import React from 'react'

const MeuComponente: React.FC = () => {
  return <div />
}
```

- Sempre importar `React` explicitamente.
- Nunca usar `function` para declarar componentes.
- Nunca usar `any`, `as`, `!` ou assertions de tipo.

### 🔧 Testes

- Todos os arquivos devem ter testes.
- Sempre criar uma função `makeSut()` nos testes.
- Todas as `interfaces` dos testes devem estar em `interfaces.ts`.
- Se houver mocks, devem estar em `__mocks__/` com `index.ts` para exportações centralizadas.
- Nunca usar `findBy`, `waitFor` ou funções do Testing Library que não existem no `vitest-browser-react`.
- Sempre que o DOM depende de mudança externa (ex: `history.push`, props, contexto), use `sut.rerender(...)` com o mesmo JSX utilizado no `render`.
- Nunca repetir JSX dentro do mesmo teste. Crie uma função de reutilização.

### 🔊 Layouts com CSS

- Sempre usar `display: flex` para layouts.
- Nunca usar `margin` para espaçamento. Use `gap`.

### 🔢 Tipagem e estrutura

- Todas as `interfaces` devem ser declaradas exclusivamente em `interfaces.ts`, inclusive fora dos testes.
- Enums devem estar sempre em `enums.ts`.
- Tipos auxiliares devem seguir o mesmo padrão: nunca declarados inline em arquivos `.tsx` ou `.ts`.
- Toda declaração fora de seu contexto (tipo, enum, interface) é bloqueada por regra de ESLint.

---

## 🧾 Regras de Commit

Este projeto segue a [convenção GitMoji](https://gitmoji.dev/) com formatação obrigatória:

```
[EMOJI] [tipo](escopo): descrição em inglês no tempo presente
```

### Exemplos:

- ✨ feat(`router`): Add support for dynamic routing
- ✅ test(`core`): Ensure `makeSut` handles invalid inputs
- ♻️ refactor(`core/Router`): Extract render logic into helper
- 🔧 chore(`eslint.config.js`): Improve custom lint rules for interfaces
- ✏️ docs(`README.md`): Add commit message guidelines

### Regras:

- Sempre escreva em **inglês**.
- Sempre use um **emoji GitMoji** no início.
- Sempre especifique o **escopo entre parênteses**.
- Use **tempo verbal presente** e frases objetivas.
- Não exceda **120 caracteres por linha**.
- Nunca use emoji como texto (`:sparkles:` ❌, `✨` ✅).

---

## 📚 Licença

Este projeto é livre para uso interno ou como boilerplate. Adaptar conforme necessidade.

