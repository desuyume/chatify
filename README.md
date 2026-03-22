# Chatify

Chat web/desktop/mobile app

# Development

## Requirements

- [Node.js (24.14.0+)](https://nodejs.org/en)
- [Pnpm (1.3.11+)](https://bun.com)

## Run project (dev)

- Clone repository

```bash
git clone https://github.com/desuyume/chatify.git
```

- Create a .env file and transfer the data from .env.example into it

- Install dependencies

```bash
bun install
```

- Run needed services (Postgres)

```bash
docker compose -f docker-compose.dev.yml up -d
```

- Start dev mode

```bash
bun dev
```

- Visit https://localhost:3000
