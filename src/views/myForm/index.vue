<template>
    <div>
        <h1>表单</h1>
        <HForm :model="form" :rules="rules">
            <HFormItem label="用户名">
                <HFormInput v-model="form.username" placeholder="用户名"></HFormInput>
            </HFormItem>
            <HFormItem label="密码" >
                <HFormInput v-model="form.password" type="password" placeholder="密码"></HFormInput>
            </HFormItem>
        </HForm>
    </div>
</template>

<script>
import HFormInput from '@/components/HFormInput'
import HFormItem from '@/components/HFormItem'
import HForm from '@/components/HForm'
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
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请选择密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit (val) {
            console.log(this.form.type)
        }
    }
}
</script>
