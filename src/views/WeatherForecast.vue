<template>
    <div class="container">
        <p class="mb-5 text">{{ username }}</p>
        <a :href="githubLink" class="mb-5 text">{{ githubLink }}</a>
        <input type="text" class="mb-5">
        <Button type="default" class="mb-5 btn">Display Weather</Button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: "JohnDoe",
        }
    },

    computed: {
        githubLink(){
            return `https://github.com/JohnDoe`
        }
    }
}
</script>

<style scoped>
.container{
    /* text-align: center; */
    display: flex;
    flex-flow: column;
    align-items: center;
}

.text{
    font-size: 16px;
}

.mb-5{
    margin-bottom: 5px;
}
</style>