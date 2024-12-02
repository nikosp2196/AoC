import * as path from 'path';
import { readFileAndParse } from '../../utils/utilities';


function calculateFrequency(list1: number[], list2: number[]): number {
    let result: number = 0;
    list1.forEach((value, index) => {
        result += value * list2.filter((item) => item === value).length;
    });

    return result;
}

const filePath = path.join(__dirname, 'input.tsv');

const {list1, list2} = readFileAndParse(filePath, "   ");

console.log(calculateFrequency(list1.sort(), list2.sort()));