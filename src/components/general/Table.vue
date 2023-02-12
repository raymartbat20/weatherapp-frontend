<template>
    <table>
        <thead>
            <tr>
                <th v-for="head in keys" :key="head.key">{{ head.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in data">
                <td v-for="value of row">{{ value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        keys: {
            type: Array,
            default: []
        },
        data: {
            type: Array,
            deafult: []
        }
    }
}
</script>

<style scoped>
table{
    width: 800px;
}
table, th, td {
  border: .5px solid black;
}
</style>