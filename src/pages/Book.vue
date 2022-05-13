<template>
	<main class="inner">
		<section class="inner__section">
			<div v-if="volumeInfo" class="inner__book book">
				<div class="book__left">
					<div class="book__cover" v-if="volumeInfo.imageLinks">
						<img :src="volumeInfo.imageLinks.thumbnail" :alt="volumeInfo.title">
					</div>
				</div>
				<div class="book__right">
					<h1 class="book__title" v-if="volumeInfo.title">{{volumeInfo.title}}</h1>
					<div class="book__categories" v-if="volumeInfo.categories">
						<p v-for="category in volumeInfo.categories" :key="category">{{category}}</p>
					</div>
					<div class="book__authors" v-if="volumeInfo.authors">
						<span>Author(s):</span>
						<p v-for="author in volumeInfo.authors" :key="author">{{author}}</p>
					</div>
					<p class="book__published" v-if="volumeInfo.publishedDate"><span>First published:</span> {{volumeInfo.publishedDate}}</p>
					<p class="book__publisher" v-if="volumeInfo.publisher"><span>Publisher:</span> {{volumeInfo.publisher}}</p>
					<p class="book__language" v-if="volumeInfo.language"><span>Language:</span> {{volumeInfo.language}}</p>
					<p class="book__pages" v-if="volumeInfo.pageCount"><span>Page count:</span> {{volumeInfo.pageCount}}</p>
				</div>
				<div class="book__bottom">
					<div class="book__description" v-if="volumeInfo.description">
						<span>Description:</span>
						<p>{{volumeInfo.description}}</p>
					</div>
				</div>
			</div>
		</section>
		<router-link to="/" class="page-back">
			<span>Return</span>
		</router-link>
	</main>
</template>

<script>

export default {
	name: "inner-page",
	data(){
		return {
			bookData: this.$store.state.innerPageData
		}
	},
	computed: {
		volumeInfo(){
			return this.bookData.volumeInfo
		}
	},
}
</script>

<style lang="scss">
@import "../style/base.scss";
@import "../style/innerpage.scss";
</style>