const data = [
    {
        postId: 1,
        id: 1,
        name: "Lorem ipsum",
        email: "Eliseo@gardner.biz",
        body: "Illum aliquid perferendis adipisci, vel ea consectetur dolor sapiente iure debitis dignissimos culpa quasi optio earum alias excepturi nostrum autem a!   Unde, corrupti. Expedita aspernatur, illo explicabo ut consectetur enim!"
    },
    {
        postId: 1,
        id: 2,
        name: "Consectetur Adipisicing",
        email: "Jayne_Kuhic@sydney.com",
        body: "Tenetur perspiciatis omnis sapiente ratione animi quis similique architecto blanditiis. Quisquam dolore iure velit reprehenderit eligendi, possimus maxime cum praesentium consequatur dolorem tenetur aliquid?"
    },
    {
        postId: 1,
        id: 3,
        name: "Repellat Fugit",
        email: "Nikita@garfield.biz",
        body: "Quidem pariatur deserunt, vitae ullam culpa velit doloremque iure magni libero sequi maiores eaque possimus nisi et! Repudiandae odio minima excepturi totam delectus rerum quis, ut aspernatur, aut ipsa assumenda aliquam tempore."
    },
]

const [, , user3] = data;
const { id, name, email } = user3;
const splittedName = name.split(' ');
console.log(`Id:     ${id}\nName:   ${splittedName[0]}\neMail:  ${email}`);