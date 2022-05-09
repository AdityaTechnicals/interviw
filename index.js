let str = " I have a cat and I like it. But I am allergic to cats";
const arr2 = str.split(" ");

function counter(arr2) {
    return arr2.sort((a, b) =>
        arr2.filter(v => v === a).length -
        arr2.filter(v => v === b).length
    ).pop();
}

const words = counter(arr2);


const countandreplace = (str, x) => {
    const arr = str.split(" ");
    var count = 0;
    var count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            count++;
        }
    }
    const newarr = str.replaceAll(x, count);

    console.log(newarr)
}
countandreplace(str, words)