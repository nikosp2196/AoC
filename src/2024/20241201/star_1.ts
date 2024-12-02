
import * as path from 'path';
import { readFileAndParse } from '../../utils/utilities';


function calculateDistance(list1: number[], list2: number[]): number {
    let result: number = 0;
    list1.forEach((value, index) => {
        result += Math.abs(list2[index] - list1[index]);
    })

    return result;
}

const filePath = path.join(__dirname, 'input.tsv');

const {list1, list2} = readFileAndParse(filePath, "   ");

console.log(calculateDistance(list1.sort(), list2.sort()));