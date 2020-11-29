<template>
  <div>
    <bookableListItem
      :itemTitle="bookable1.title"
      :content="bookable1.content"
      :price="bookable1.price"
    />
    <bookableListItem
      :itemTitle="bookable2.title"
      :content="bookable2.content"
      :price="bookable2.price"
    />
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: { BookableListItem },
  data() {
    return {
      bookable1: {
        title: "Cheap Villa from data",
        content: "A very cheap villa",
        price: 1000,
      },
      bookable2: {
        title: "Cheap Villa 2",
        content: "A very cheap villa 2",
        price: 1500,
      },
    };
  },
  beforeCreate() {
    console.log("before Create");
  },
  created() {
    // fetch data here
    console.log("created");
    console.log(this.bookable1);

    setTimeout(() => {
      this.bookable1.title = "new title";
    }, 3000);
  },
  beforeMount() {
    console.log("before Mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("before  Destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>