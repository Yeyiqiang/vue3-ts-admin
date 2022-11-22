/*
 * @File:  
 * @Author: yeyqa
 * @Company: FaDu
 * @Date: 2022-11-18 15:39:08
 * @Description: 
 */
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
export default defineComponent({
    setup(){
        return ()=>{
            return <>
                <RouterView></RouterView>
            </>
        }
    }
})