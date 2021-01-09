"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const packager_core_1 = require("./packager-core");
// prepare files to combine
const test_folder = fs.readdirSync("../test_combine_JSONs");
let test_combine_JSONs = [];
test_folder.forEach(item => {
    test_combine_JSONs.push(JSON.parse(fs.readFileSync("../test_combine_JSONs/" + item).toString()));
});
// prepare file to split
const test_split_JSON = JSON.parse(fs.readFileSync("../test_split_JSON.json").toString());
// execute the requested function
if (process.argv[2] == "combine") {
    console.log(JSON.stringify(packager_core_1.combineJSONs(test_combine_JSONs), null, 2));
}
else if (process.argv[2] == "split") {
    console.log(packager_core_1.splitJSON(test_split_JSON));
}
else {
    console.log("Must run with argv \'split\' or \'combine\'.");
}
//# sourceMappingURL=json-packager.js.map