# NPM Feed

A handy HTML to JSON parser for NPM.

## Installation

```bash
yarn add @beskar-labs/npm-feed
```

## Usage

The module exports a single function that takes an NPM `username` (without the `@`) and optionally, a boolean that determines whether to filter for packages namespaced under the `@scope` of the username.

```jsx
import getNpmFeed from '@beskar-labs/npm-feed';

/* Example of fetching all packages */
const feed1 = await getNpmFeed('haydenbleasel');

/* Example of fetching namespaced packages only */
const feed2 = await getNpmFeed('haydenbleasel', true);
```

## Contributing

If you have suggestions for how this module could be improved, or want to report a bug, open an issue! I'd love all and any contributions.
