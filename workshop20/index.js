const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];



function main() {
    const root = document.getElementById("root");


    //creating the head
    const heading = document.createElement("h1");
    heading.innerText = "FREELANCERS";
    heading.className = "purple";
    root.appendChild(heading);


    //create an ul list
    const myList = document.createElement("ul");

    //looping the list
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const printUser = `${user.name}, ${user.age}, ${user.occupation}`;


    //creating li elements
    let liMyList = document.createElement("li");
    liMyList.textContent = printUser;
    myList.appendChild(liMyList);
    liMyList.className = "users1"

    }
    // link to the body
    root.appendChild(myList);
}
//call the main function
main();