<template>
    <div>
        <h1>表单</h1>
        <HForm :model="form" :rules="rules" ref="form">
            <HFormItem label="用户名" prop="username">
                <HFormInput v-model="form.username" placeholder="用户名"></HFormInput>
            </HFormItem>
            <HFormItem label="密码" prop="password">
                <HFormInput
                    v-model="form.password"
                    type="password"
                    placeholder="密码"
                ></HFormInput>
            </HFormItem>
            <HFormItem label="验证码" prop="vcode">
            <HFormInput v-model="form.vcode"></HFormInput>
                <!-- <button @click="onLogin">登陆</button> -->
            </HFormItem>
        </HForm>
        <!-- <el-input v-model="form.username"></el-input> -->
        <button @click="onLogin">登陆</button>
    </div>
</template>

<script>
import HFormInput from '@/components/HFormInput'
import HFormItem from '@/components/HFormItem'
import HForm from '@/components/HForm'
// import create from '@/js/utils/create'
export default {
    components: {
        HFormInput,
        HFormItem,
        HForm
    },
    data () {
        return {
            form: {
                username: 'baby',
                password: '',
                vcode: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名' }
                ],
                password: [
                    { required: true, message: '请选择密码' }
                ],
                vcode: [
                    { required: true, message: '请选择验证码' }
                ]
            }
        }
    },
    methods: {
        onLogin (val) {
            this.$refs.form.validate(valid => {
                const notice = this.$notice({
                    title: '社会你杨哥喊你来搬砖',
                    message: valid ? '成功' : '校验失败!',
                    duration: 2000
                })
                notice.show()
            })
        }
    }
}
</script>
