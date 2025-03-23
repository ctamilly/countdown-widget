# Countdown Widget

Um widget simples e responsivo de contagem regressiva, personalizável via parâmetros de URL.

## ✅ Acesse a página
👉 [Clique aqui para abrir o Countdown Widget](https://ctamilly.github.io/countdown-widget/)

## ✅ Como personalizar via parâmetros de URL
Você pode alterar a data, o título e o tema diretamente na URL.

### Parâmetros disponíveis:
- **`date`** — Defina a data-alvo da contagem regressiva (formato `YYYY-MM-DDTHH:MM:SS`).
- **`title`** — Defina o título que aparece acima do contador.
- **`theme`** — Altere o tema. Valores possíveis: `light` ou `dark`.

### Exemplos:

#### ✅ Alterar data:
```
https://ctamilly.github.io/countdown-widget/?date=2025-12-31T23:59:59
```

#### ✅ Alterar título:
```
https://ctamilly.github.io/countdown-widget/?title=Prova%20Final
```
*(use `%20` para espaços)*

#### ✅ Alterar data + título + tema juntos:
```
https://ctamilly.github.io/countdown-widget/?date=2025-12-31T23:59:59&title=Entrega%20do%20Projeto&theme=dark
```

## ✅ Como gerar embed
Se quiser embutir o contador em outro site via `iframe`, use:
```html
<iframe src="https://ctamilly.github.io/countdown-widget/?date=2025-12-31T23:59:59&title=Evento%20Especial" width="100%" height="150" style="border:none;"></iframe>
```

## ✅ Personalizações CSS adicionais
Você pode editar o arquivo `style.css` para alterar as cores, tamanhos de fonte ou bordas.

---



