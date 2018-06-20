<template>
    <el-main>
        <api-doc></api-doc>
    </el-main>
</template>

<script>
    import ApiDoc from './component/api-doc/api-doc.vue'

    export default {
        name: "working-desk",
        components: {
            ApiDoc
        },
    }
</script>

<style scoped>
</style>