<style src="../scss/button.scss"></style>

<!-- Taken from https://codepen.io/Quiddlee/pen/MWPbKxg -->
<template>
	<button class="btn">
		<div class="btn__bg">
			<span class="btn__bg__layer btn__bg__layer-first"></span>
			<span class="btn__bg__layer btn__bg__layer-second"></span>
			<span class="btn__bg__layer btn__bg__layer-third"></span>
		</div>

		<span class="btn__text-out">{{ text }}</span>
		<span class="btn__text-in">{{ text }}</span>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {
			type: String,
			required: false
		},
	},
	computed: {
		text() {
			const slotContent = this.$slots?.default()[0]?.children?.trim();
			return slotContent;
		}
	}
};
</script>
