<template>
    <div class="container" v-show="this.user?.nickname">
        <p class="mb-5 text">{{ name }}</p>
        <a target="_blank" :href="githubLink" class="mb-5 text">{{ githubLink }}</a>
        <form @submit.prevent="submitForm" class="container">
            <Input inputType="text" v-model="search" class="mb-5" icon="magnifying-glass" />
            <Button buttonType="submit" type="default" class="mb-5 btn">Display Weather</Button>
        </form>
    </div>
</template>

<script>
export default {

    data(){
        return {
            user: null,
            search: "",
        }
    },

    computed: {
        githubLink(){
            return `https://github.com/${this.user?.nickname}`
        },
        name(){
            return this.user?.name
        }
    },

    methods:{
        submitForm(){
            alert(`searching for ${this.search}`);
        }
    },

    beforeMount(){
        this.user = this.$auth0.user;
    },
}
</script>

<style scoped>
.container{
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