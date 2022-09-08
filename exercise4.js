for (let i = 5; i < 11; i++) {
    console.log(i);
}

for (let i = 20; i > 9; i--) {
    if (i==13) {
        break;
    }
    console.log(i);
}

for (let i = 2; i < 11; i = i +2){
    console.log(i);
}
let i = 2;

while (i<=16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
    
}
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}