<template>
    <head></head>
    <body>
        <pre>{{json}}</pre>
    </body>
</template>

<script>
import axios from 'axios';
export default{
    async created(){
        const res = await axios.get('tasks');
        this.json = res.data;
    },
    data(){
        return{
            json: ''
        }
    }
}
</script>