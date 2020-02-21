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
            <HFormItem>
                <button @click="onLogin">登陆</button>
            </HFormItem>
        </HForm>
    </div>
</template>

<script>
import HFormInput from '@/components/HFormInput'
import HFormItem from '@/components/HFormItem'
import HForm from '@/components/HForm'
import Notice from '@/components/Notice'
import create from '@/js/utils/create'
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
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名' }
                ],
                password: [
                    { required: true, message: '请选择密码' }
                ]
            }
        }
    },
    methods: {
        onLogin (val) {
            this.$refs.form.validate(valid => {
                const notice = create(Notice, {
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
