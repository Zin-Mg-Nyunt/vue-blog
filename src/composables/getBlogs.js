import { db } from "@/firebase/config";
import { ref } from "vue";

let getBlogs = () => {
    let error = ref("");
    let blogs = ref([]);
    let load = async() => {
        try {
            // let response = await fetch("http://localhost:3000/blogs/")
            // if (response.status === 404) {
            //     throw new Error("Not Found URL");
            // }
            // let datas = await response.json();
            // blogs.value = datas;
            let res = await db.collection("blogs").get() // fetch data from firebase
            blogs.value = res.docs.map(doc => {
                return {id:doc.id,...doc.data()} // store in blogs arr
            })
        } catch (err) {
            error.value = err.message;
        }
    }

    return {blogs,error,load}
}
export default getBlogs;