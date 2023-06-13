const {createApp} = Vue;

createApp({
    data(){
        return{
            newEmail: "",
        }
    },

    methods: {
        getRandomEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) =>{
                const result = response.data;

                this.newEmail = result.response;

                console.log(this.newEmail);
            })
        }
    },

    created(){
        this.getRandomEmail();
    }
}).mount("#app");