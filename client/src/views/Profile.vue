<template>
     <div v-if="user != null">
        <h2>Profile</h2>
        <p>{{ this.user.username}}</p>
        <p>{{ this.user.email}}</p>
    </div>
</template>

<script>
import axios from 'axios';
import '../axios';

export default {
    async created(){
        console.log(localStorage.getItem('token'));
        await axios.get('users/profile', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            this.user = res.data;
            localStorage.setItem('username', this.user.username);
            console.log(this.user.username);
        })
    },
    data(){
        return {
            user: null,
        }
    },
}
</script>

<style>

</style>