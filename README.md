# example-plugin-api

[![version](https://img.shields.io/github/v/release/flowscripter/example-plugin-api?sort=semver)](https://github.com/flowscripter/example-plugin-api/releases)
[![build](https://img.shields.io/github/workflow/status/flowscripter/example-plugin-api/release-deno-library)](https://github.com/flowscripter/example-plugin-api/actions/workflows/release-deno-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/example-plugin-api/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/example-plugin-api)
[![dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Fexample-plugin-api%2Fmain%2Fmod.ts)](https://github.com/flowscripter/example-plugin-api/blob/main/deps.ts)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https://deno.land/x/flowscripter_example_plugin_api/mod.ts)
[![license: MIT](https://img.shields.io/github/license/flowscripter/example-plugin-api)](https://github.com/flowscripter/example-plugin-api/blob/main/LICENSE)

> Example plugin API for the
> [dynamic-plugin-framework](https://github.com/flowscripter/dynamic-plugin-framework).

## Deno Module Usage

```typescript
import {
  EXTENSION_POINT_1,
  ExtensionPoint1,
} from "https://deno.land/x/flowscripter_example_plugin_api/mod.ts";

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

### API

Link to auto-generated API docs for the library:

[API Documentation](https://doc.deno.land/https://deno.land/x/flowscripter_example_plugin_api/mod.ts)

## License

MIT © Flowscripter
