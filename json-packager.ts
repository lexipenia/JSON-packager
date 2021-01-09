import * as fs from "fs"

import {
combineJSONs,
splitJSON
} from "./packager-core"

// prepare files to combine
const test_folder: Array<string> = fs.readdirSync("../test_combine_JSONs")
let test_combine_JSONs: Array<object> = []
test_folder.forEach(item => {
  test_combine_JSONs.push(JSON.parse(fs.readFileSync("../test_combine_JSONs/" + item).toString()))
})

// prepare file to split
const test_split_JSON: object = JSON.parse(fs.readFileSync("../test_split_JSON.json").toString())

// execute the requested function
if (process.argv[2] == "combine"){
  console.log(JSON.stringify(combineJSONs(test_combine_JSONs), null, 2))
}
else if (process.argv[2] == "split"){
  console.log(splitJSON(test_split_JSON))
}
else {
  console.log("Must run with argv \'split\' or \'combine\'.")
}