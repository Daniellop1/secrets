# Dglobal Secrets

With Dglobal Secrets you can create secrets in a simple way.

Example:

```js

export const generateAuthSecret = () => fetch(
  'https://secrets.dglobal.eu.org/32',
  { cache: 'no-cache' },
).then(res => res.text());

```

You can also specify the length of the secret string as follows:

| URL  | Length  |
| ------------- | ------------- |
| https://secrets.dglobal.eu.org/  | 32  |
| https://secrets.dglobal.eu.org/64  | 64  |
| https://secrets.dglobal.eu.org/[number]  | number  |
