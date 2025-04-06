<template>
    <div style="text-align:center; margin:30px 0;">
        <div v-for="tag in uniqueTag" :key="tag" class="tag-div">
            <router-link :to="{name: 'tag', params:{tag}}">
                {{tag}}
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
    props:['blogs'],
    setup(props){
        // ဒီနည်းလမ်းက tutorial ထဲကနည်းလမ်း အလုပ်မလုပ်လို့။ ဘယ်လိုအလုပ်မလုပ်တာလဲဆိုတော့ တစ်ခြား route ကိုရောက်သွားတဲ့အခါ uniqueTag တွေကို loop ပတ်ပြီး ထုတ်ထားတယ့် tag component က ပျောက်သွားရော home page ကိုပြန်လာရင်လဲ အဲ့မှာပါ ပျောက်သွားရော chatgpt ကိုမေးကြည့်တော့  props.blogs ကို forEach နဲ့ loop ပတ်တာက တစ်ကြိမ်ပဲ loop ပတ်ပြီး အဲ့လို route တွေကူးသွားတဲ့အခါမှာ ထပ်ပြီးတော့ loop မပတ်တော့တာကြောင့် uniqueTag က ဘာမှမရှိတော့တဲ့ ပုံစံဖြစ်သွားပြီး template မှာ loopa ပတ်ထားတယ့်ဟာတွေက ပျောက်ကုန်တာဖြစ်တယ်
        // let tags = ref([])
        // props.blogs.forEach((blog)=>{
        //     blog.tags.forEach((tag)=>{
        //         tags.value.push(tag);
        //     })
        // })
        
        // let uniqueTag = tags.value.filter((tag,index,array)=>{
        //     return array.indexOf(tag) === index
        // })


        // ဒါက chatgpt ကနည်းလမ်း ပိုလွယ်ပြီး ပိုမြန်တယ် ဒီpattern က ဒီလိုပုံစံတွေမှာ သုံးရတယ့် pattern ပဲ အလွတ်မှတ်ထားလို့ရတယ်
        let uniqueTag = computed(()=>{
            if (!props.blogs) { // blogs ထဲမှာ data ပါ/မပါ စစ်တာ
                return []
            }

            let allTags=props.blogs.flatMap(blog=>blog.tags); 
            return [...new Set(allTags)]
            // flatMap ရဲ့ အလုပ်လုပ်ပုံ
            //const blogs = [
            //   { title: 'Post 1', tags: ['vue', 'javascript'] },
            //   { title: 'Post 2', tags: ['vue', 'html'] }
            // ]

            // without flatMap
            // const allTags = blogs.map(blog => blog.tags)
            // console.log(allTags)
            // → [ ['vue', 'javascript'], ['vue', 'html'] ]

            // with flatMap
            // const allTags = blogs.flatMap(blog => blog.tags)
            // console.log(allTags)
            // → [ 'vue', 'javascript', 'vue', 'html' ]

            // new Set() ရဲ့အလုပ်လုပ်ပုံ
            // const tags = ['vue', 'javascript', 'vue', 'html']
            // const uniqueTags = [...new Set(tags)]
            // console.log(uniqueTags)
            // → ['vue', 'javascript', 'html']

            // new Set(...) — to remove duplicates and return Set obj,not array. That's why put into the array back
            // [...Set] — to turn it back into an array


        })
        return {uniqueTag}
    }
}
</script>

<style>
    .tag-div{
        display: inline-block;
        padding: 10px 20px;
        margin: 10px;
        cursor: pointer;
        user-select: none;
    }
    .tag-div > a{
        font-size: 20px;
        color: lightgray;
    }
    .tag-div > a.router-link-active{
        color: #070e27;
    }
</style>