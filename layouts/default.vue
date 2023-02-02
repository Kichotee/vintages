<template>
	<v-app>
		<v-main class="h-screen">
			<div
				class="mb-12 mx-0 w-screen pa-0"
				style="height: 15vh"
			>
				<div
					class="d-flex w-50 mx-auto d-flex flex-row align-center justify-center h-100 bg-gray pa-0  "
				>
					<h2>The vintages</h2>
					<!-- <p>Experience retro class</p> -->
				</div>
			</div>

			<slot class="h-100 border" />
		</v-main>
	</v-app>
</template>

<script setup></script>

<style lang="scss" scoped>
	@import "../assets/_reset.scss";
</style>
