<template>
<section class="gradient-custom">
  <div class="container">
    <div class="d-flex justify-content-center align-items-center ">
      <div class="col-12">

        <div class="card ">
          <div class="card-body p-6 ">

            <form v-on:submit.prevent="addTask()" class="d-flex justify-content-center mb-4 ">
              <div class="form-outline flex-fill">
                <input type="text" id="form2" placeholder="New Task..." class="form-control" v-model="newTaskName"/>
              </div>
              <button type="submit" v-bind:disabled="!isLoggedIn" class="btn btn-info ms-2">Add</button>
            </form>

            <!-- Tabs navs -->
            <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                  aria-controls="ex1-tabs-1" v-bind:aria-selected="allSelected" @click="selectionChanged('All')">All</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                  aria-controls="ex1-tabs-2" v-bind:aria-selected="activeSelected" @click="selectionChanged('Active')">Active</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                  aria-controls="ex1-tabs-3" v-bind:aria-selected="completedSelected" @click="selectionChanged('Completed')">Completed</a>
              </li>
            </ul>
            <!-- Tabs navs -->

            <!-- Tabs content -->
            <div class="tab-content" id="ex1-content">
              <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                <ul v-if="!tasksLoading" class="list-group mb-0">
                  <li v-for="task in tasksToDisplay" :key="task._id" class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
                  <div v-if="allSelected || (activeSelected && !task.done) || (completedSelected && task.done)" class="col-12 align-items-center d-flex">
                        <p class="col-6">{{ task.name }}</p>
                        <p class="col-3">{{ task.author }}</p>
                        <div class="col-3">
                            <button class="btn btn-success btn-sm" v-bind:disabled="!isLoggedIn" v-on:click="changeTaskState(task)">{{getTaskStateEnum(task)}}</button>
                            <router-link :to="{name: 'TaskDetail', params:{id: task._id}}"  class="btn btn-primary btn-sm" tag="button" v-show="isLoggedIn">Edit</router-link>
                            <button class="btn btn-danger btn-sm " v-bind:disabled="!isLoggedIn" v-on:click="deleteTask(task)">Delete</button>
                        </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Tabs content -->

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
          
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios'; 
var _ = require('lodash');
export default {
    data(){
        return{
            tasks: [],
            allSelected: true,
            activeSelected: false,
            completedSelected: false,
            newTaskName: '',
            tasksLoading: true,
            user: localStorage.getItem('user')
        }
    },
    async created(){
        await this.loadTasks();
    },
    methods: {
        selectionChanged(option){
            this.allSelected = false;
            this.activeSelected = false;
            this.completedSelected = false;

            switch(option){
                case 'All':
                    this.allSelected = true;
                    break;
                case 'Active':
                    this.activeSelected = true;
                    break;
                case 'Completed':
                    this.completedSelected = true;
                    break;
            }
        },
        async addTask(){
            let task = {
                name: this.newTaskName,
                author: localStorage.getItem('username')
            }
            await axios.post('tasks', task);
            this.newTaskName = '';
            this.loadTasks();
        },
        async loadTasks(){
            this.tasks = await axios.get('tasks');
            this.tasksLoading = false;
        },
        async changeTaskState(task){
            await axios.patch('tasks/'+task._id, {
                done: !task.done
            });
            this.loadTasks();
        },
        getTaskStateEnum(task){
            return task.done == true ? 'Revert' : 'Done';
        },
        async deleteTask(task){
            await axios.delete('tasks/'+task._id);
            await this.loadTasks();
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        tasksToDisplay(){
          return _.filter(this.tasks.data, (task) => {
              if(this.allSelected)return true;
              else if(this.activeSelected) return !task.done
              else return task.done;
            })
        }
    }
}
</script>

<style>
.btn{
    margin-right: 5px;
}
</style>