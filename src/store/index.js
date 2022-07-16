import { createStore } from 'vuex'


export default createStore({
  state: {
    friends:[]
},
getters: {
    friendsarr(state){
        return state.friends
    }
},
mutations: {
    updatefriends(state,friends){
        state.friends=friends;
    }
},
actions: {
    async fetchusers(ctx){
        //const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        //const posts= await res.json();
        const friends=[{
                id:24,
                name:"IVAN BATOV",
                description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price:"20000",
                photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            },{
                id:25,
                name:"IVAN BATOV",
                description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                price:"20000",
                photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            },{
                id:26,
                name:"IVAN BATOV",
                description:"Свободен",
                price:"20000",
                photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            },{
                id:27,
                name:"IVAN BATOV",
                description:"Свободен",
                price:"20000",
                photo:"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
            },
        ]
        ctx.commit('updatefriends',friends)
    }
},
})
