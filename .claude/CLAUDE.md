# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@flowscripter/example-plugin-api` - Example plugin API for the [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework). Demonstrates how to define an extension point interface and its identifier constant for use by plugins.

## Commands

```bash
# Install
bun install

# Test
bun test

# Format
bunx oxfmt

# Lint
bunx oxlint index.ts

# Generate API documentation
bunx typedoc --readme none index.ts
```

## Architecture

- `index.ts` -- sole source file; exports `EXTENSION_POINT_1` (string identifier) and `ExtensionPoint1` (interface with `sayHello()`) for use by plugin implementations
- No `src/` or `tests/` directories -- the API surface is minimal and lives entirely in `index.ts`
