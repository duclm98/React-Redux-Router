const data = [{
    id: 0,
    name: 'Learn React'
}, {
    id: 1,
    name: 'Learn Hook'
}, {
    id: 2,
    name: 'Learn Redux'
}, {
    id: 3,
    name: 'Learn Node'
}, {
    id: 4,
    name: 'Learn Express'
}];

export const getTodos = async () => {
    try {
        // Call API ...
        return {
            status: true,
            payload: data
        }
    } catch (error) {
        return {
            status: false,
            payload: []
        };
    }
}

export const addTodo = async (todoName) => {
    try {
        const newTodo = {
            id: data.length,
            name: todoName
        }
        data.push(newTodo)
        return {
            status: true,
            msg: "Thêm công việc thành công.",
            payload: newTodo
        }
    } catch (error) {
        return {
            status: false,
            msg: "Thêm công việc không thành công!"
        }
    }
}