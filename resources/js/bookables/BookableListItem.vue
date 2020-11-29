<template>
  <div>
    <h1>{{ itemTitle }}</h1>
    <p>{{ content }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, content: String, price: Number },
  mounted() {
    console.log(this.itemTitle);
  },
};
</script>