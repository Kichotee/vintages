<template>
	<div class="h-100">
		<v-main
			class="  align-center"
		>
            <div class="bg-black w-25 h-25" color="black" width="20" height="20">

            </div>
            <SectionThree :image="image3"/>
            <HeroSection :image="image1"/>
            <sectionTwo :image="image2"/>

		</v-main>
	</div>
</template>

<script setup>
	import image1 from "../assets/images/zach-kessinger-BXs7ynbcXoY-unsplash.jpg";
	import image2 from "../assets/images/nathan-dumlao-gQYUUn5byyE-unsplash.jpg";
	import image3 from "../assets/images/clem-onojeghuo-bR4lTpjKW2o-unsplash.jpg";
	import image4 from "../assets/images/alexandros-athanasopoulos-GUFR1WsgCQQ-unsplash.jpg";
</script>

<style lang="scss" scoped></style>
