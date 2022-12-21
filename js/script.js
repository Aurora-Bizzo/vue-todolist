const { createApp } = Vue;

createApp({
    data(){
        return {
            toDoList:
            [
               'Fare le pulizie',
               'Comprare un regalo per mamma',
               'Giocare con i gatti per almeno un ora',
               'Andare dal parrucchiere',
               'Montare il nuovo mobile del soggiorno',
               'Prendere appuntamento dal dentista',
               'Rammendare la biancheria',
               'Ripassare la lezione precedente',
               'Fare i compiti'
            ]
        }
    }
}).mount('#app')
