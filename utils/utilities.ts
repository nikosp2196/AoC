import * as fs from 'fs';

export function readFileAndParse(filePath: string, delimiter: string): {list1: number[]; list2: number[]} {
    const list1: number[] = [];
    const list2: number[] = [];

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.trim().split('\n');

        lines.forEach((line, index) => {
            const temp: string[] = line.split(delimiter);

            list1.push(Number(temp[0]));
            list1.push(Number(temp[1]));
        })
    } catch (error) {
        console.error('Error reading the file:', error);
    }
    return {list1, list2};
}