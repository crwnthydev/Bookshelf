<template>
  <div class="books-list">
    <BookCard v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
import BookCard from "./BookCard";

export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  components: {
    BookCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/base.scss";
@import "../style/bookslist.scss";
</style>
