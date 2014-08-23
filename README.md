# cursor

> Cursor selection made easy

## Install

```sh
$ npm install --save speedr/cursor
```

## Usage

```js
var cursor = require('cursor');

cursor();           // Use 'default'
cursor('pointer');  // Use 'pointer'
cursor('grabbing'); // Use 'grabbing' or '-webkit-grabbing' or '-moz-grabbing'
```

## API

### cursor()

Set cursor to `default`.

#### cursor(typr)

Set cursor to the given `type`.

## License

MIT © Florent Cailhol
