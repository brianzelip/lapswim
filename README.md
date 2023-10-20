# Lapswim

Menu bar app for displaying today's lap swim schedule at the Waverly Y in Baltimore.

Or

Today's lap swim schedule\* in the macOS menu bar†.

![screenshot of lapswim cli](./cli-screenshot.png)

\* At the Waverly Y in Baltimore

† Currently cli only

## Code provenance

```sh
# init cli choices:
# - JS/!TS
# - tests/ dir
# - do not auto install 3 browsers
npm init playwright@latest

# Install only Firefox
npx playwright install firefox

# Run tests headless
npx playwright test

# Run tests in UI mode
npx playwright test --ui
```

## Contributing

Open a PR!

## Author

Brian Zelip, https://zelip.me

## License

GPLv3
