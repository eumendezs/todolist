# To Do (HTML + CSS + JS + LocalStorage)

Aplicativo **To Do simples** (nível graduação) usando **apenas HTML, CSS e JavaScript (ES6+)**, **sem bibliotecas**, **sem servidor** e com **persistência em LocalStorage**.

## Como executar
1. Baixe/cloner este projeto.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arraste para uma aba).
3. Não requer servidor local.

## Funcionalidades obrigatórias implementadas
- **Adicionar nova tarefa** (botão *Adicionar* ou tecla **Enter**).
- **Listar tarefas** na tela.
- **Marcar como concluída** (checkbox altera visual com texto riscado).
- **Excluir tarefa** (botão *Excluir*).
- **Persistência**: tarefas permanecem após recarregar (LocalStorage).

## Regras técnicas
- Tecnologias: **HTML, CSS e JavaScript (ES6+)**.
- Estrutura de arquivos mínima atendida:
  - `index.html`
  - `css/styles.css`
  - `js/app.js`
  - `README.md`
- Cada tarefa é um objeto JSON com campos: `id`, `text`, `completed`.
- `id` gerado com `Date.now()`.
- Funções presentes no código:
  - `loadTasks()`, `saveTasks()`, `renderTasks()`
  - `addTask(text)`, `toggleTask(id)`, `deleteTask(id)`

## Interface e acessibilidade
- Formulário com `label` acessível, **Enter** para adicionar.
- Lista semântica (`<ul>`) de tarefas, cada item contém:
  - Texto da tarefa
  - **Checkbox** para concluir
  - **Botão** de excluir
- **Feedback visual imediato** ao adicionar/marcar/excluir.
- **Responsivo básico**: funciona bem em celular e desktop.
- **Erro** ao tentar adicionar tarefa vazia (mensagem abaixo do campo).

## Observações
- Código pequeno, claro e comentado.
- Sem frameworks, bundlers ou bibliotecas externas
