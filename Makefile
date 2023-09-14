SHELL := /bin/bash

build:
	pnpm build

up:
	pnpm dev

lint:
	pnpm lint

write:
	pnpm prettier --write .

test:
	npx playwright test

firefox:
	npx playwright test --project=firefox --headed