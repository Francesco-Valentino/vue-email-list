const {createApp} = Vue;

createApp({
    data(){
        return{
            newEmails: [],
        }
    },

    methods: {
        getRandomEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) =>{
                const result = response.data;

                this.newEmails.push(result.response);

                console.log(result.response);
            })
        }
    },

    created(){
        for(let i = 0; i < 10; i++){
            this.getRandomEmail();
        }
    }
}).mount("#app");