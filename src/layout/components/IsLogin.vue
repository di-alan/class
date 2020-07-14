<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="loginModelVisible"
                width="30%"
                @close="cancel"
        >
            <div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="userName">
                        <el-input  v-model="ruleForm.userName"  autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
           <el-button @click="cancel">取 消</el-button>
           <el-button type="primary" @click="submit">确 定</el-button>
           </span>
        </el-dialog>
    </div>
</template>
<script>
    import {mapState} from "vuex";
    import {loginApi} from "../../api/user-api";
    import {creatKey, setItem} from "../../util/localstore";
    export default {
        name: "IsLogin",
        data() {
            var userName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }else if (value.length < 5) {
                    return callback(new Error('请输入大于5位'))
                } else{
                    callback();
                }
            }
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    password: '',
                    userName: '',
                },
                rules: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    userName: [
                        { validator: userName, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            cancel() {
                this.$store.commit('changeLoginModelVisible', {isShow: false})
            },
            submit() {

                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm);
                        //登陆成功之后
                        loginApi(this.ruleForm.userName,this.ruleForm.password).then(res=>{
                            console.log(res.userInfo.nickname)
                            this.$store.commit('changeLoginModelVisible', {isShow: false})
                            // localStorage.setItem(creatKey('isLogin'),'true')
                            setItem(creatKey('isLogin'),'true',Date.now()+35000)
                            this.$store.commit('setUserInfo', {userInfo: res.userInfo})
                            // localStorage.setItem(creatKey('userInfo'),JSON.stringify(res.userInfo))
                            this.$store.commit('setIsLogin', {isLogin:true})
                            if (res.code ==0){
                                //给用户提示
                                //把登陆注册 变成用户头像和用户名
                                //
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                            }
                        })
                    } else {
                        console.log('登陆失败');
                        return false;
                    }
                });
            }
        },
        computed: {
            ...mapState(['loginModelVisible'])
        }
    }
</script>

<style scoped lang="less">

</style>