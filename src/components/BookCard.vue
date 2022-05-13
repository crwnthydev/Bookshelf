<template>
    <router-link to="/inner" class="books-list__item book-card" @click="this.$store.commit('setCurrentBook', this.book)">
        <h3 class="book-card__title">{{volumeInfo.title}}</h3>
        <div class="book-card__picture" v-if="volumeInfo.imageLinks">
          <img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title">
        </div>
        <div class="book-card__content">
          <div class="book-card__authors" v-if="volumeInfo.authors">
              <p class="book-card__author" v-for="author in volumeInfo.authors" :key="author">{{author}}</p>
          </div>
          <p class="book-card__published" v-if="volumeInfo.publishedDate">{{publishingYear}}</p>
        </div>
    </router-link>
</template>

<script>

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    volumeInfo(){
      return this.book.volumeInfo
    },
    publishingYear(){
      if(this.volumeInfo.publishedDate){
        return this.volumeInfo.publishedDate.slice(0,4)
      }
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/base.scss";
@import "../style/bookcard.scss";
</style>
