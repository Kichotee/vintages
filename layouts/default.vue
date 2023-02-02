<template>
	<v-app  class="w-screen h-screen max-h-auto">
		<div class="border-b w-max  h-8">
			<!-- <v-app-bar-nav-icon class='w-25%'/> -->
			<v-sheet  class="d-flex bg-gray flex-row  justify-space-between align-center" > 
                <h2>The vintages</h2>
                <p>Experience retro class</p>
            </v-sheet>
		</div>

		<slot />
	</v-app>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/_reset.scss'

</style>
