# GameSettings

Ferramenta de linha de comando em Python que analisa o hardware e os jogos encontrados no computador para sugerir configurações gráficas. As recomendações usam uma tabela de GPUs e um banco de jogos que pode ser editado.

## O que o projeto faz

- Identifica informações de CPU, memória e GPU disponíveis no computador.
- Procura jogos em bibliotecas da Steam e, no Windows, em instalações da Epic Games.
- Permite incluir jogos manualmente.
- Sugere predefinições conforme resolução e prioridade: desempenho, equilíbrio ou qualidade.
- Apresenta recomendações e avisos sobre recursos como upscaling, ray tracing e memória de vídeo, conforme os dados disponíveis.
- Pode salvar o resultado em um arquivo de texto.

As sugestões são estimativas baseadas nas regras e no banco do projeto. Elas não alteram automaticamente as configurações dos jogos nem garantem uma taxa específica de quadros por segundo.

## Requisitos

- Python 3.
- Windows para a detecção de jogos da Epic Games. A detecção de hardware e de jogos depende das informações disponíveis no sistema.
- A biblioteca opcional `psutil` melhora a identificação de memória e processador:

  ```bash
  python -m pip install psutil
  ```

Mantenha `games_db.json` na mesma pasta de `gamesettings.py`. Em um executável gerado pelo projeto, o programa procura esse arquivo ao lado do executável.

## Como executar

Na pasta do projeto, execute o modo interativo:

```bash
python gamesettings.py
```

Também é possível informar prioridade, resolução, jogos adicionais e um arquivo de saída:

```bash
python gamesettings.py -m equilibrado -r 1080p --add "Nome do jogo" --salvar relatorio.txt
```

Para consultar todas as opções:

```bash
python gamesettings.py --help
```

## Personalização

O arquivo `games_db.json` contém os perfis de jogos usados pelas recomendações. Jogos que não estiverem no banco recebem uma recomendação genérica. A tabela `GPU_TABLE`, em `gamesettings.py`, reúne os modelos de GPU reconhecidos pelo projeto.

## Estrutura

- `gamesettings.py`: detecção, regras de recomendação e interface de linha de comando.
- `games_db.json`: perfis editáveis de jogos.
- `GameSettings.spec` e `build_exe.bat`: arquivos relacionados à geração do executável.
