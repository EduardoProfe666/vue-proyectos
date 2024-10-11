import {ref, Ref} from "vue";
import ToDoItem from "@/components/toDo/todo-item.model";
import {generateUniqueNumber} from "@/components/toDo/utils";

export default class TodoService{
    private readonly todoList: Ref<ToDoItem[]>

    constructor() {
        this.todoList = ref([
            { id: generateUniqueNumber(), localdatetime: new Date(), completed: false, task: "Tarea 1" },
            { id: generateUniqueNumber(), localdatetime: new Date(), completed: false, task: "Tarea 2" },
            { id: generateUniqueNumber(), localdatetime: new Date(), completed: false, task: "Tarea 3" },
        ]);
    }

    getTodoList() {
        return this.todoList;
    }

    insertTodo(task: string){
        this.todoList.value.push({
            id: generateUniqueNumber(),
            localdatetime: new Date(),
            completed: false,
            task: task
        })
    }
}