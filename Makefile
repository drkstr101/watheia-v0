.PHONY: setup clean lint test build start

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

ci:
	$(MAKE) setup
	$(MAKE) format
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean
	bit clear-cache

analyze:
	ANALYZE=true nx build docs --verbose

setup:
	npm install --global @teambit/bvm
	bvm install
	bit config set analytics_reporting false
	bit config set interactive false
	bit install
	bit compile
	bit status

lint:
	nx workspace-lint
	nx run-many --all --target lint

test: setup-utils
	nx run-many --all --target test

build:
	nx run-many --all --target build

# Run all in parallel
start: setup-utils
	nx run-many --all --target serve --parallel

docs:
	nx build docs --prod --verbose --skip-nx-cache

depgraph:
	mkdir -p dist/docs
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to apps/docs/public/depgraph.dot --prefix "https://github.com/drkstr101/watheia/blob/main/"
	cat apps/docs/public/depgraph.dot | dot -T svg > apps/docs/public/depgraph.svg.tmp
	mv apps/docs/public/depgraph.svg.tmp apps/docs/public/depgraph.svg



