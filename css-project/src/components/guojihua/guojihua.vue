<template>
    <div>
        <div>国际化</div>
        <input type="button" :value="$t('message.i1')" @click="checklang">
        <h1>{{$t('message.i1')}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'guojihua',
        data() {
            return {

            }
        },
        methods: {
            checklang(){
                localStorage.setItem('lang','cn')
                // this.$i18n.locale = 'cn'
            }
        }
    }
</script>