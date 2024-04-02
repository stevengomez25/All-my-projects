function solution(statues) {
    let count = 0;
    let statues_sorted = statues.sort();
    for (j of statues_sorted){
        j;
        x = statues_sorted.indexOf(j);
        y = j-statues_sorted.indexOf(statues_sorted.indexOf(j)-1);
        y;
        if (j-statues_sorted.indexOf(statues_sorted.indexOf(j)-1)!=1){
            count+=j-statues_sorted.indexOf(statues_sorted.indexOf(j)-1)+1;
        }
    }
    return console.log(count);
}
statues = [0,4,5,6]
solution(statues);


