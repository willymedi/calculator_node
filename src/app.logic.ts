import * as fs from 'fs';
import {yarg} from "./config/plugins/args.plugin"

const {b:base, l:limit, s:showTable} = yarg
const headerMessage = `
================================================
                Tabla del ${base}
================================================
`
let outputMessage: string = "";
for (let i= 1; i <= limit; i++) {
    outputMessage += `${base} x ${i+1} = ${base*(i+1)} \n`

}

outputMessage = headerMessage + outputMessage
if (showTable) {
    console.log(outputMessage);
}


const outputPath = `outputs`


fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)