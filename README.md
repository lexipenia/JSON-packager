# json-packager

Two simple functions are contained in the `packager-core` module:
* `combineJSONs` combines an array of JSON objects into a single JSON object with key names `repo_1`, `repo_2`, etc…
* `splitJSON` splits a single JSON object into an array of JSON objects, making a new object out of each key.

## Usage

Just copy `packager-core.ts` into your project and import the functions:
```
import {
packageJSONs,
splitJSON
} from "./packager-core"
```

## Testing

You can test the functions using the `json-packager` script and example files in this repo. Run from within the `build` folder using the argument `combine` to test `combineJSONs` and `split` to test `splitJSON`:
```
node json-packager.js combine
node json-packager.js split 
```