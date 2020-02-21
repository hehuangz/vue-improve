<template>
    <div>
        <div>以下是默认插槽begin</div>
        <slot></slot>
        end
        <div>以下是具名插槽begin</div>
        <slot name="hh"></slot>
        end
        <div>以下是作用域插槽begin</div>
        <slot name='h2' foo="foo"></slot>
        end
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>
