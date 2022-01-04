function spider(arr,N)
{
    let p=0;
    let sum=0;
    let ar=[];
    while(p<N)
    {
        let x=Math.min(arr[p+1],arr[p+2]);
        ar.push(x)
        p=Math.min(arr[p+1],arr[p+2]);
    }
    return ar[0];
}

function runProgram(input) {
    // Write code here
    input=input.split('\n');
    let N=+input[0].trim();
    let arr=input[1].trim().split(" ").map(Number);
    console.log(spider(arr,N));
    // console.log(min)
    }
if (process.env.USER == "myubuntu") {
    runProgram(`4
    10 30 40 20`)
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
}