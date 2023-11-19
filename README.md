# Lapswim

Today's lap swim schedule\* in the macOS menu bar†.

![screenshot of lapswim cli](./cli-screenshot.png)

\* At the Waverly and Towson Ys in Baltimore

† Currently cli only

## Resources

- [`launchd` tutorial](https://launchd.info/)
- https://8thlight.com/insights/tutorial-add-a-menu-bar-extra-to-a-macos-app
- [Tauri menubar app template](https://github.com/4gray/tauri-menubar-app) - Vite and Vue, app shows in dock and `alt + tab`
  - https://betterprogramming.pub/create-menubar-app-with-tauri-510ab7f7c43d
- [Build a Menubar app with Tauri](https://www.youtube.com/watch?v=Jm5dzewv3gA)
  - [source code](https://github.com/rust-adventure/yt-tauri-menubar-example)
- [Build A Menu Bar App With Python & Rumps](https://www.youtube.com/watch?v=TW6VEywhtT4) (no audio)
- [Create a mac menu bar app in SwiftUI with MenuBarExtra](https://sarunw.com/posts/swiftui-menu-bar-app/)
- [Building macOS Menu Bar Stocks App Using SwiftUI](https://www.youtube.com/watch?v=cA-oUgOfLxY)
- [Building a ChatGPT macOS toolbar app using SwiftUI](https://www.youtube.com/watch?v=v6SMV_TUOJk)
- [Creating Menu Bar App in macOS Using AppKit](https://www.youtube.com/watch?v=uszImMe0CsU)
- [SwiftUI](https://developer.apple.com/documentation/swiftui)
- [AppKit](https://developer.apple.com/documentation/appkit)
- [Electron Tray tutorial](https://www.electronjs.org/docs/latest/tutorial/tray)

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
