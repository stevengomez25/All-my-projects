var uniqueInOrder=function(iterable){
    let iterable_modified=[];
    for(let i = 0; i < iterable.length; i++){
        if ((iterable[i-1])!=iterable[i]){
        iterable_modified.push(iterable[i]);
    }
    }
    return iterable_modified;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))