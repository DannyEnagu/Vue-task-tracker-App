<template>
    <form @submit="onSubmit" class='add-form'>
        <div class="form-control">
            <label htmlFor='add-task'>Task</label>    
            <input type="text" 
            name="add-task" id="task-input"
                placeholder="Add Task" 
                v-model="text"
                />
        </div>        
        <div class ="form-control">
            <label htmlFor='add-dt'>Day & Time</label>    
            <input type="text"
                name="add-dt"
                id="dt-input"
                placeholder="Add Day & Time"
                v-model="day"
                />
         </div>        
        <div class="form-control form-control-check">
            <label htmlFor='add-task'>Set Reminder</label>    
            <input type="checkbox" 
            name="add-task" 
            id="task-input" 
            v-model="reminder"
            />
        </div>     

    <input type="submit" value="Save Task" class="btn btn-block" />   
</form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e){

            e.preventDefault();

            if(!this.text){
                alert('Please add a task');
                return
            }

            const newTask = {
                // id: Math.floor(Math.random() * 10000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task', newTask)


            this.text = '',
            this.day = '',
            this.reminder = false
        }
    },
}
</script>


<style scoped>

.add-form {
    margin-bottom: 40px;
}
.form-control{
    margin: 20px 0;
}
.form-control label {
    margin-top: 20px;
}
.form-control input{
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px; 
}
.form-control-check{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form-control-check label{
    flex: 1;
}

.form-control-check input{
    flex: 2;
    height: 20px;
}
</style>