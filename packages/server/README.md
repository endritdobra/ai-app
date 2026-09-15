# server

To install dependencies:

```bash
bun install
```

Copy `.env.example` to `.env`, then add your Ollama API key. You can also
change `OLLAMA_MODEL` to another model available in Ollama Cloud.

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
