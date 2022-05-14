<template>
	<main class="home">
		<section class="home__section">
			<div class="home__heading">
				<h1>Bookshelf</h1>
				<p>Find a book in Google-books library</p>
			</div>
			<form class="home__form form" @submit.prevent="getBooks">
				<span>Search options:</span>
				<div class="form__wrap">
					<my-input placeholder="Keywords..." v-model="searchQuery"/>
					<div class="form__row">
						<my-select v-model="searchCategory" :options="categories"/>
						<my-select v-model="sort" :options="sortingTypes"/>
					</div>
				</div>
				<my-button type="submit">Show result</my-button>
			</form>
			<BooksList v-if="!isLoading" :books="books"/>
			<div class="posts-loader" v-else>
				<span>Loading...</span>
			</div>
		</section>
	</main>
</template>

<script>
import BooksList from '@/components/BooksList'
import axios from 'axios'

export default {
	name: "main-page",
	data() {
		return {
			books: [],
			sort: 'relevance',
			limit: '20',
			isLoading: false,
			searchQuery: '',
			searchCategory: 'intitle',
			categories: [
				{value: 'intitle', name: 'By title'},
				{value: 'inauthor', name: 'By author'},
				{value: 'inpublisher', name: 'By publisher'},
			],
			sortingTypes: [
				{value: 'relevance', name: 'Relevant'},
				{value: 'newest', name: 'Newest'},
			]
		}
	},
	components: {
		BooksList
	},
	methods: {
		async getBooks() {
			try {
				this.isLoading = true;
				const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?
				q=${this.searchCategory}
				:${this.searchQuery}
				&orderBy=${this.sort}
				&maxResults=${this.limit}`);
				this.books = response.data.items;
				this.$store.commit('setLastRequest', response.data.items)
			} catch(e) {
				alert('Error');
			} finally {
				this.isLoading = false;
			}
		}
	},
	mounted(){
		this.$store.state.lastRequestData.length > 0 ? this.books = this.$store.state.lastRequestData : this.getBooks();
	}
}
</script>

<style lang="scss">
@import "../style/base.scss";
@import "../style/home.scss";
</style>