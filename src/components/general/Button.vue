<template>
    <button
     :class="['button',type]"
     :disabled="disabled"
     :type="buttonType"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },

        disabled: {
            type: Boolean,
            default: false
        },

        buttonType: {
            type: String,
            default: "button"
        }
    }
}
</script>

<style scoped>
.button{
    padding: 7px 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
}

.default {
    background-color: rgb(48, 127, 230);
    border-color: rgb(48, 127, 230);
}

.default:hover:enabled {
    background-color: rgb(38, 99, 179);
    border-color: rgb(37, 101, 184);
}

.success {
    background-color: rgb(53, 207, 104);
    border-color: rgb(53, 207, 104);
}

.success:hover:enabled {
    background-color: rgb(28, 202, 86);
    border-color: rgb(28, 202, 86);
}

.danger {
    background-color: rgb(233, 55, 55);
    border-color: rgb(233, 55, 55);
}

.danger:hover:enabled {
    background-color: rgb(206, 30, 30);
    border-color: rgb(206, 30, 30);
}

.button:disabled{
    cursor: not-allowed;
    opacity: 0.8;
}
</style>