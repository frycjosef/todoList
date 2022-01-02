<template>
    <div>
        <div class="row">
            <div class="card mx-auto">
                <div class="class-header text-black ">
                    <h2>
                        Detail 
                    </h2>
                </div>
                <div class="card-body" v-if="!taskLoading">
                    <form @submit.prevent="updateTask">
                        <div class="form-group">
                            <h4 for="taskname" class="font-weight-bold">New task name</h4>
                            <input id="taskname" type="text" placeholder="Enter new task name..." class="form-control" v-model="taskName"/>
                            <p v-show="emptyName" class="text-danger">This field is required!</p>
                        </div>
                        <input type="submit" class="btn btn-primary" v-bind:disabled="!isLoggedIn" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapGetters} from 'vuex';
export default {
    name: 'TaskDetail',
    data(){
        return{
            taskName: '',
            task: {},
            taskLoading: true,
            emptyName: false
        }
    },
    methods: {
        updateTask(){
            if(this.taskName.length <= 0){
                this.emptyName = true;
            }
            else{
                axios.patch('tasks/'+this.task.data._id, {
                    name: this.taskName
                }).then(() => {
                    this.$router.push('/');
                })
            }
        }
    },
    async created(){
        this.task = await axios.get('tasks/' + this.$route.params.id);
        this.taskLoading = false;
        this.taskName = this.task.data.name
    },
    computed:{
        ...mapGetters(["isLoggedIn"]),
    }
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