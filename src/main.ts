
import { createApp } from 'vue'
import './style.css'
import App from './App'
import { setRouters } from './router'
import { setupProdMockServer } from '../mock'
import { setupStore } from './store'
import 'element-plus/dist/index.css'

async function run(){
    const app = createApp(App)

    /* 配置 store , 类似Vuex 5 */
    setupStore(app)
    
    /* 配置路由 */
    await setRouters(app)

    /* 配置mock */
    await setupProdMockServer()
    
    app.mount('#app')
}

run()

