# bun-typegraphql-prisma

install dependencies:

```bash
bun install
```

run db:

```bash
docker compose up -d
```

migrate db:

```bash
bunx prisma migrate dev
```

run api:

```bash
bun dev
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
