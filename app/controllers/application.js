import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		searchForSubreddits() {
			let keywords = this.get('keywords'); //Same as the keywords in the .hbs file

			this.transitionToRoute('subreddit', keywords);
		}
	}
});
