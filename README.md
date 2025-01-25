# example-plugin-api

[![version](https://img.shields.io/github/v/release/flowscripter/example-plugin-api?sort=semver)](https://github.com/flowscripter/example-plugin-api/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/example-plugin-api/release-deno-library.yml)](https://github.com/flowscripter/example-plugin-api/actions/workflows/release-deno-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/example-plugin-api/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/example-plugin-api)
[![deno doc](https://doc.deno.land/badge.svg)](https://jsr.io/@flowscripter/example-plugin-api/doc)
[![license: MIT](https://img.shields.io/github/license/flowscripter/example-plugin-api)](https://github.com/flowscripter/example-plugin-api/blob/main/LICENSE)

> Example plugin API for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework).

## Deno Module Usage

```typescript
import {
  EXTENSION_POINT_1,
  ExtensionPoint1,
} from "@flowscripter/example-plugin-api";

// ExtensionPoint1 is identified by EXTENSION_POINT_1 identifier

class MyExtensionPointImplementation implements ExtensionPoint1 {
  public sayHello(): void {
    // greetings...
  }
}
```

## Development

Lint: `deno fmt`

## Documentation

### Overview

```mermaid
classDiagram
    
   class ExtensionPoint1 {
      <<interface>>
      sayHello()
   }
```

### Framework API

Refer to the
[dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework)
for an overview of what this example is demonstrating.

### API

Link to auto-generated API docs for the library:

[API Documentation](https://jsr.io/@flowscripter/example-plugin-api/doc)

## License

MIT © Flowscripter
