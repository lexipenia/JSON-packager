export function combineJSONs(input_jsons: Array<object>): object {

  let output_json: object = {}
  let counter: number = 0

  input_jsons.forEach(item => {
    counter += 1
    let key_name: string = "repo_" + counter
    output_json[key_name] = item
  })

  return output_json

}

export function splitJSON(input_json: object): Array<object> {

  let output_jsons: Array<object> = []

  for (const [repo, json] of Object.entries(input_json)){
    output_jsons.push(json)
  }

  return output_jsons

}