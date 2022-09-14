# Test Repo

Minimal reproduction for the bug https://github.com/webpack/webpack/issues/16160


# Steps to reproduce

1. Clone this repo
2. Install dependencies: `yarn`
3. Run a build: `yarn build`
4. Make a modification to the `src/image.svg` file, or run: `yarn modify-image`
   to do so automatically (appends a blank line)
5. Run a build again: `yarn build`

This second build will fail on a cache error
To reset the cache to a clean state, run `yarn clear-webpack-cache`
