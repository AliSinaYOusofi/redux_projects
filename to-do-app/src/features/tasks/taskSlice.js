import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    status: "empty",
    value : []
}

export const taskSlice = createSlice( {
    
    name: "tasks",
    initialState,

    reducers: {
        addTodos(state, action) {
            state.value.push(action.payload);
        },

        updateTodo(state, action) {
            const {id, taskName, description, startDate, endDate} = action.payload;
            const currentTodo = state.value.map( todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        taskName,
                        description,
                        startDate,
                        endDate
                    }
                }
                return todo;
            });

            return {
                ...state,
                value: currentTodo
            }
        },

        deleteTodo(state, action) {
            
            const {id} = action.payload;
            
            const updatedTodos = state.value.filter( todo => todo.id !== id);
            return {
                ...state,
                value: updatedTodos
            }
        }
    }
});

export const {addTodos, updateTodo, deleteTodo} = taskSlice.actions;


export default taskSlice.reducer;