import { ref } from "vue"

let getBlog = (id) => {
    let blog = ref({})
    let error = ref("")
    let load = async() => {
        try {
            let response = await fetch("http://localhost:3000/blogs/" + id)
            if (response.status === 404) {
                throw new Error("Not Found URL"); 
            }
            let data = await response.json()
            blog.value = data
        } catch (err) {
            error.value = err.message
        }
    }
    return {blog,error,load}
}

export default getBlog;