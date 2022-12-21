const { createApp } = Vue;

createApp({
    data(){
        return {
            newTask: '',
            toDoList:
            [
               {
                text: 'Fare le pulizie',
                done: false,
               },
               {
                text: 'Comprare un regalo per mamma',
                done: false,
               },
               {
                text: 'Giocare con i gatti per almeno un ora',
                done: false,
               },
               {
                text: 'Andare dal parrucchiere',
                done: false,
               },
               {
                text: 'Montare il nuovo mobile del soggiorno',
                done: false,
               },
               {
                text: 'Prendere appuntamento dal dentista',
                done: false,
               },
               {
                text: 'Rammendare la biancheria',
                done: false,
               },
               {
                text: 'Ripassare la lezione precedente',
                done: false,
               },
               {
                text: 'Fare i compiti',
                done: false,
               }
            ]
        }
    },
    methods: {
        addTask()
        {
            let object = {
                text: this.newTask,
                done: false,
            }
            this.toDoList.push(object);
            this.newTask = '';
        },
        deleteTask(index)
        {
            this.toDoList.splice(index, 1);
        },
        checkTask(index)
        {
            let task = this.toDoList[index];
            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        }
    }
}).mount('#app');

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});