function getOpenTab(arr){
let lastOpen=[]
for(let word of arr){
    if(word.startsWith("open")){
        const last=word.split(" ")[1]
        lastOpen.push(last)
    }else if(word.startsWith("close")){
        const num=word.replace("close","")
        for(let i=0;i<num;i++){
          lastOpen.pop()
        }
    }
}
return lastOpen;
}

const arr = [
    "open chrome",
    "open firefox",
    "open folder",
    "close2",
    "open notes",
    "open teams",
    "close1",
    "open vscode"
];
console.log(getOpenTab(arr))