# @react-go/babel-plugin-auto-css-modules

Automatically identify CSS Modules

## Usage

Without options:

```json
{
  "plugins": ["@react-go/babel-plugin-auto-css-modules"]
}
```

With options:

```json
{
  "plugins": [
    ["@react-go/babel-plugin-auto-css-modules", { "flag": "css_modules" }]
  ]
}
```

## Options

### `flag`

`string`, default to `css_modules`

Query param added to style file path.

### `extensions`

`array`, default to `[".css"]`

Style files extensions which you need add query param.
