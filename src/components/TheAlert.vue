<template>
    <div class="alert" :class="type" @click="$emit('close')">
        <p class="alert-title">{{ title }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['title', 'type']
}
</script>

<style scopre lang="scss">

.alert {
    margin: 20px auto;
    width: 50%;
    padding: 15px;
    border-radius: 5px;
}

.success {
    background-color: rgb(155, 182, 155);
}

.error {
    background-color: rgb(223, 126, 126);
}
</style>
