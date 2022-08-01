
const app = Vue.createApp({
    //template: `
    //<h1>Hola Anthony!</h1>
    //<p> {{  }} </p>
    //`

    data() {
        return {
            quote: 'Soy Anthony!!',
            message:' Vue 3.0 es diferente',
            author: 'Desarrollador Web'
        }
    },
    methods: {
        cambiarQuote() {
            console.log('Anthony')
            this.author = 'Desarrollador de software'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')