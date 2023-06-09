<template>
    <div>
        <footer>
        <h1>{{ copyrights }}</h1>
        </footer>
    </div>

</template>

<script>
export default {
    name: 'HeaderPage',
    data() {
        return {
            copyrights: 'CopyRight 2023 - Vue by Ajar Sarmad',
        }
    }
}
</script>

<style scoped>
footer {
    background: grey;
    padding: 5px;
    /* border: 100cap; */
    /* margin: 100px; */
}
h1 {
    color: greenyellow;
    text-align: center;
}
</style>