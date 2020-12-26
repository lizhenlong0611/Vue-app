<template>
    <div>
        <router-view/>
    </div>
</template>
<script>
export default {
    created(){
        this.$http.get()
    }
}
</script>