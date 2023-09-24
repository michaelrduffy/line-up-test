# Line up tech test

Built using:

- React
- Typescript
- Redux, Redux-toolkit, & RTK Query
- Tailwind
- Vite's react-ts template

**Note**: I ran into a lot of CORS issues so I ended up disabling it in my browser using the following cmd:

OSX version:

```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

others available [here](https://alfilatov.com/posts/run-chrome-without-cors/)

---

## Notes for Setup

You'll need a `.env.local` file with the following format:

```
VITE_BASE_URL=<<<LINE UP API>>>
VITE_LINE_UP_TOKEN=<<<BEARER TOKEN>>>
```
