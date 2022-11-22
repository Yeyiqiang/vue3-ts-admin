/*
 * @File:  
 * @Author: yeyqa
 * @Company: FaDu
 * @Date: 2022-11-22 14:20:26
 * @Description: 
 */
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    setup(){
        const router = useRouter()
        onMounted(()=>{
            setTimeout(()=>{
                router.push('/login')
            },5000) 
        })
        return ()=>{
            return <div> this is start </div>
        }
    }
})