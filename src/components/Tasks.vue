<template>
<div>
     <ul :key="task.id" v-for="task in tasks">
            <Task 
            @toggle-reminder="$emit('toggle-reminder', task.id)" 
            @delete-task="$emit('delete-task', task.id)" 
            :task="task" /> 
    </ul>
</div>    
</template>

<script>
import Task from './Task.vue'

export default {
    name : 'Tasks',
    props: {
        tasks: Array
    },
    components: {
        Task
    },
    emit: ['delete-task', 'toggle-reminder'],
}
</script>

<style scope>
ul{
    list-style: none;
}
</style>