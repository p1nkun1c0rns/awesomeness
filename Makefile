.PHONY: install-deps awesome-lint generated-toc ci all

NODE_MODULES = ./node_modules
AWESOME_LINT = $(NODE_MODULES)/awesome-lint/cli.js
DOCTOC = $(NODE_MODULES)/doctoc/doctoc.js

install-deps:
	npm install

awesome-lint: install-deps
	$(AWESOME_LINT)

generated-toc: install-deps
	$(DOCTOC) README.md

ci: awesome-lint

all: install-deps ci generated-toc
