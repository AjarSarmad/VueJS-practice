<template>
    <div>
        <header>
        <h1>{{ title }}</h1>
        </header>
    </div>

</template>

<script>
export default {
    name: 'HeaderPage',
    data() {
        return {
            title: 'Welcome to Vue',
        }
    }
}
</script>

<style scoped>
header {
    background: darkblue;
    padding: 20px;
    /* border: 100cap; */
    /* margin: 100px; */
}
h1 {
    color: whitesmoke;
    text-align: center;
}
</style>