<template>
    <div class="input-icons">
        <FontAwesomeIcon :icon="['fa-solid', `fa-${icon}`]" class="icon" v-if="icon" />
        <input 
            :class="[icon ? `input-with-icon` : `simple-input`, `input`]" 
            :type="inputType" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ""
        },
        inputType: {
            type: String,
            default: "text"
        },
        placeholder:{
            type: String,
            default: ""
        },
        modelValue: {
            type: String,
            default: ""
        }
    },
    emits: ['update:modelValue']
}
</script>

<style scoped>
.input-icons svg {
    position: absolute;
    z-index: 9999;
}
    
.input-icons {
    width: 100%;
    margin-bottom: 10px;
}
    
.icon {
    padding: 12px 3px;
    color: rgb(65, 65, 66);
    min-width: 50px;
    text-align: center;
}
    
.input {
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #e3e3e3;
}

.input:focus {
    border: 1px solid #e3e3e3;
    outline: #e3e3e3;
}

.simple-input {
    padding: 10px
}

.input-with-icon {
    padding: 10px 10px 10px 45px;
}
</style>