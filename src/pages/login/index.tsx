
import { userLogin } from '../../api/login'
import { useCountStore } from '@/store/modules/useCountStore';
import { ElMessage } from 'element-plus'

export const Login = defineComponent({
    setup(){
        const userInfo = reactive({
            username:'admin',
            password:''
        })
        const store = useCountStore();
        function ToLogin(){
            store.add()
            userLogin({
                username: userInfo.username,
                password: userInfo.password
            }).then((res:any)=>{
                ElMessage({
                    showClose: true,
                    message: `登录成功`,
                    type: "error",
                });
            }).catch(err=>{
                ElMessage({
                    showClose: true,
                    message: `${err.msg}请检查网络或联系管理员！`,
                    type: "error",
                });
                console.log(err);
            })
        }
        return ()=>{
            return <el-card>
                <el-form model={userInfo}>
                    <el-form-item label="用户名" labelWidth="80px">
                        <el-input v-model={userInfo.username} placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="密码" labelWidth="80px">
                        <el-input type="password" v-model={userInfo.password} placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item>
                        <el-button  style="margin:auto" type="primary" onClick={ToLogin}>登 录</el-button>
                    </el-form-item>
                </el-form>
                <span>登录次数：{store.count}</span>
            </el-card>
        }
    }
})