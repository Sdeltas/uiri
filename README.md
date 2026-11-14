# Uiri

**Created by sdeltas, Uiri is an interactive 3D guide to what happens after you enter a web address.**

Uiri turns the hidden trip from browser to website into a scrollable 3D journey. You can follow the example or enter a public website to see real DNS and security details where available. The map and timing are simplified estimates, not an exact route through the internet.

The starting journey is an illustration, not a claim about Uiri.com's current hosting. Enter a URL to trace that site's observed DNS, TLS, and CDN details.

![A request crossing the ocean in Uiri](design/s5.png)

## The Journey

1. Your browser checks whether it already has a copy of the page.
2. DNS looks up the address of the website.
3. Your device opens a connection to a server.
4. TLS helps secure the connection.
5. A nearby content network checks whether it can deliver a saved copy.
6. If it cannot, the request may travel farther to the website's server.
7. Your browser puts the page together and displays it.

## Try It

Scroll through the story, or type a public website into the address bar. You can also open a shared trace directly, for example `/?url=github.com`.

For a local preview, install Node.js and run:

```bash
npm ci
npm run dev
```

Then open http://localhost:3000. Add `?debug` to show developer performance stats and controls for jumping between stages.

## How It Is Made

1. [STORYBOARD.md](STORYBOARD.md) lays out the visual story. [SCENES.md](SCENES.md) explains the shared interface each scene follows.
2. [src/lib/stages.ts](src/lib/stages.ts) holds the stage text, interactive details, and scroll timing. The seven files from `src/scenes/Stage0Url.tsx` to `src/scenes/Stage6Render.tsx` build the scenes.
3. `src/core/` coordinates the camera, moving packet, and scene lifecycle. `src/app/api/` looks up DNS, TLS, and CDN information for a site when available.

The debug mode and the `github.com` shared-trace link were checked in the running app. More implementation and performance details are in [SCENES.md](SCENES.md) and [PERF.md](PERF.md).

## Open Source

No license has been selected yet. Choose and add a license before inviting others to reuse or distribute the project.
