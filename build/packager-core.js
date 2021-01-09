"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitJSON = exports.combineJSONs = void 0;
function combineJSONs(input_jsons) {
    let output_json = {};
    let counter = 0;
    input_jsons.forEach(item => {
        counter += 1;
        let key_name = "repo_" + counter;
        output_json[key_name] = item;
    });
    return output_json;
}
exports.combineJSONs = combineJSONs;
function splitJSON(input_json) {
    let output_jsons = [];
    for (const [repo, json] of Object.entries(input_json)) {
        output_jsons.push(json);
    }
    return output_jsons;
}
exports.splitJSON = splitJSON;
//# sourceMappingURL=packager-core.js.map