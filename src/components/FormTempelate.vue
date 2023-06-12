<template>
    <div>
        <h1>
            Please fill the form
        </h1>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-body">
                <slot name="form-body"></slot>
            </div>
            <div id="form-footer">
                <slot name="form-footer"></slot>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormTempelate',
    data() {
        return {

        }
    },
    props: {

    },
    methods: {

    },
    computed: {

    },
    mounted() {

    }
}
</script>