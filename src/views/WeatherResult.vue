<template>
    <Table 
    :keys="keys"
    :data="data"
    />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        keys: {
            type: Array,
            default: [],
        },
        data: {
            type: Array,
            default: []
        }
    },
}
</script>

<style scoped>
.back-button{
    margin-top: 5px;
    float: right;
}
</style>