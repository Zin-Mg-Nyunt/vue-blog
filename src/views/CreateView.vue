<template>
    <form @submit.prevent="addBlog">
    <label>Blog Title</label>
    <input type="text" v-model="title">
    <p v-if="show" class="warning">Please fill the blog's title!</p>

    <label>Blog Body</label>
    <textarea v-model="body"></textarea>
    <p v-if="show" class="warning">Please fill the blog's body!</p>

    <label>Tag</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="collectTag">
    <p v-if="show" class="warning">Please fill the blog's tag!</p>
    <div v-for="tag in tags" :key="tag" class="tag-wrapper">
      <p>{{tag}}</p>
    </div>

    <!-- <div style="text-align:center"> -->
      <button>Add Blog</button>
    <!-- </div> -->
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db, timestamp } from '@/firebase/config';
export default {
  setup(){
    let router =useRouter();
    let title = ref("")
    let body = ref("")
    let tag = ref("")
    let tags = ref([])
    let show = ref(false)

    let collectTag=()=>{
        if (!tag.value) {
            return
        }
        // check the tags arr to don't accept same data twice
        if (!tags.value.includes(tag.value)) { 
            tags.value.push(tag.value);
        }
      tag.value="";
    }
    let addBlog = async()=>{
        //check to the data fill complete
      let newBlog = {
        title:title.value,
        body:body.value,
        tags:tags.value,
        created_at:timestamp()
      }
      if ( tags.value.length == 0 || title.value == "" || body.value == "") {
        show.value = true;
        return;
      }
      let res =await db.collection("blogs").add(newBlog)
      // fetch("http://localhost:3000/blogs/",{
      //   method:"POST",
      //   headers: {
      //     "Content-type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     title:title.value,
      //     body:body.value,
      //     tags:tags.value
      //   })
      // })
      router.push('/')
    }
    return {title,body,tag,tags,addBlog,collectTag,show}
  }
}
</script>

<style>
  form{
    margin: 100px auto;
    padding: 20px;
    width: 400px;
    user-select: none;
  }
  label,input,textarea{
    display: block;
  }
  label{
    margin: 20px 0 10px;
    color: #070e27;
    font-size: 25px;
    font-weight: bold;
  }
  input,textarea{
    box-sizing: border-box;
    width: 100%;
    padding: 15px 10px;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #070e27;
  }
  input:focus,textarea:focus{
    outline: none;
  }
  .tag-wrapper{
    padding: 10px;
    margin: 10px;
    margin-left: 0;
    border-radius: 5px;
    background-color: #070e27;
    color: white;
    display: inline-block;
  }
  .tag-wrapper>p{
    padding: 0;
    margin: 0;
  }
  .warning{
    color: red;
  }
  button{
    display: block;
    margin: 30px auto;
    padding: 15px 20px;
    font-size: 17px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #070e27;
    font-weight: bold;
    cursor: pointer;
  }
  button:active{
    opacity: 0.6;
  }
</style>