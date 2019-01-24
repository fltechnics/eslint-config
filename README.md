# eslint-config-fltechnics

Eslint configuration.

## Installation

Install this package, and save it as a devDependency:

```
npm install --save-dev eslint-config-fltechnics
```

Then have your project's `.eslintrc` file extend the ruleset.

```json
{
    "extends": "fltechnics"
}
```

If you're using Vue in your project, you'll need to extend the Vue extension of the configuration, and install the eslint Vue and html plugins:

```json
{
    "extends": "fltechnics/vue"
}
```

Also not forget to:

```
yarn add eslint-plugin-vue eslint-plugin-html --dev
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
