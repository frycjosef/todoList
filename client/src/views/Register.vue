<template>
    <div>
        <div class="row">
            <div class="card mx-auto">
                <div class="class-header text-black ">
                    <h2>
                        Register
                    </h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                            <h4 for="username" class="font-weight-bold">Username</h4>
                            <input id="username" type="text" placeholder="Enter username..." class="form-control" v-model="username"/>
                        </div>
                        <div class="form-group">
                            <h4 for="username" class="font-weight-bold">Email</h4>
                            <input id="email" type="text" placeholder="Enter email..." class="form-control" v-model="email"/>
                        </div>
                        <div class="form-group">
                            <h4 for="password" class="font-weight-bold">Password</h4>
                            <input id="password" type="password" placeholder="Enter password..." class="form-control" v-model="password"/>
                        </div>
                        <div class="form-group">
                            <h4 for="password" class="font-weight-bold">Repeat your password</h4>
                            <input id="passwordControl" type="password" placeholder="Enter your password again..." class="form-control" v-model="passwordControl"/>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import "../axios";

export default {
    data(){
        return{
            username: null,
            email: null,
            password: null,
            passwordControl: null
        }
    },
    methods: {
        registerUser(){
            const userData = {
                username: this.username,
                email: this.email,
                password: this.password,
                confirm_password: this.passwordControl
            };

            axios.post('users/register', userData).then(() => {
                this.$router.push('/login');
            }).catch(err => {
                console.log(err);
            })
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