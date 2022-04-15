.PHONY: setup clean lint test ci start

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean
	bit clear-cache

ci:
	nx format
	nx run-many --all --target lint
	nx run-many --all --target test -u
	nx run-many --all --target make
	$(MAKE) screenplay

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


# Run all in parallel
start: setup-utils
	nx run-many --all --target serve --parallel

home:
	nx run home:build:production
	nx run home:docker

blog:
	nx run blog:build:production
	nx run blog:docker

docs:
	nx run docs:build:production
	nx run docs:docker

expo:
	nx run expo:build:production
	nx run expo:docker

screenplay:
	nx run screenplay:e2e
	nx run screenplay:docker

# depgraph:
# 	mkdir -p dist/docs
# 	depcruise . \
# 		--config .dependency-cruiser.js  \
# 		--output-type dot \
# 		--output-to apps/docs/public/depgraph.dot --prefix "https://github.com/drkstr101/watheia/blob/main/"
# 	cat apps/docs/public/depgraph.dot | dot -T svg > apps/docs/public/depgraph.svg.tmp
# 	mv apps/docs/public/depgraph.svg.tmp apps/docs/public/depgraph.svg



