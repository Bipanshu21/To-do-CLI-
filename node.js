import readline from 'readline';

const rl = readline.createInterface({
     input : process.stdin,
     output : process.stdout
})

const todo = []

const showMenu = () =>{
     console.log('\n 1: Add a Task');
     console.log('2: View Tasks');
     console.log('3: Exit');
     rl.question("Choose an option : ", (option)=>{
           let data = parseInt(option);
           if(data === 1){
               rl.question("Enter a task : ", (task) => {
                    todo.push(task);
                    console.log("Added task" ,task);
                    showMenu();
               });
           }
           else if(data === 2){
                todo.forEach((task, index) => {
                     console.log(`${index+1} : ${task}`);
                })
                showMenu();
           }else if(data === 3){
                console.log("Good bye brother");
                rl.close();
           }else{
                console.log("Invalid option, please try again!!");
                showMenu();
           }
     })
}

showMenu();






