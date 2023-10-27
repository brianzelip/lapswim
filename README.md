# Lapswim

Today's lap swim schedule\* in the macOS menu bar†.

![screenshot of lapswim cli](./cli-screenshot.png)

\* At the Waverly and Towson Ys in Baltimore

† Currently cli only

## Resources

- [Build a Menubar app with Tauri](https://www.youtube.com/watch?v=Jm5dzewv3gA)
  - [source code](https://github.com/rust-adventure/yt-tauri-menubar-example)
- [Build A Menu Bar App With Python & Rumps](https://www.youtube.com/watch?v=TW6VEywhtT4) (no audio)
- [Building macOS Menu Bar Stocks App Using SwiftUI](https://www.youtube.com/watch?v=cA-oUgOfLxY)
- [Creating Menu Bar App in macOS Using AppKit](https://www.youtube.com/watch?v=uszImMe0CsU)
- [SwiftUI](https://developer.apple.com/documentation/swiftui)
- [AppKit](https://developer.apple.com/documentation/appkit)

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
