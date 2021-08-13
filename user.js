//user
//user - this goes with the importing and exporting modules files, user, main and module for week 11
export function user (name, age){
    const obj = {
        name,
        age,
        printName: () => console.log(name),
        printAge: () => console.log(age),
    }
    return obj;
}