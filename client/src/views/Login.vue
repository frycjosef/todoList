<template>
    <div>
        <div class="row">
            <div class="card mx-auto">
                <div class="class-header text-black ">
                    <h2>
                        Login
                    </h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="form-group">
                            <h4 for="username" class="font-weight-bold">Username</h4>
                            <input id="username" type="text" placeholder="Enter username..." class="form-control" v-model="username"/>
                            <p v-show="emptyUsername" class="text-danger">This field is required!</p>
                        </div>
                        <div class="form-group">
                            <h4 for="password" class="font-weight-bold">Password</h4>
                            <input id="password" type="password" placeholder="Enter password..." class="form-control" v-model="password"/>
                            <p v-show="emptyPassword" class="text-danger">This field is required!</p>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Login" />
                        <p v-show="wrongPasswordEntered" class="text-danger">Invalid password or username.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            username: '',
            password: '',
            wrongPasswordEntered: false,
            emptyPassword: false,
            emptyUsername: false
        }
    },
    methods: {
        ...mapActions(['login']),
        async loginUser(){
            let user = {
                username: this.username,
                password: this.password
            }
            if(this.username.length <= 0 ){
                this.emptyUsername = true;
            }else{
                this.emptyUsername = false;
            }
            if(this.password.length <= 0){
                this.emptyPassword = true;
            }else{
                this.emptyPassword = false;
            }
            if(!this.emptyPassword && !this.emptyUsername){
                await this.login(user);
                if(localStorage.getItem('token') != null && localStorage.getItem('token') != ''){
                    console.log(localStorage.getItem('token').length);
                    this.$router.push('/profile');
                }
                this.wrongPasswordEntered = true;
            }
        }
    },
}
</script>

<style>
.card{
    width: 60%;
    border-radius: 0;
    margin-top: 100px;
}
.btn{
    border-radius: 0;
}
.form-control{
    border-radius: 0;
}
.form-group{
    margin-bottom: 20px;
}
</style>