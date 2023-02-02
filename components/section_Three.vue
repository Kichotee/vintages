<template>
    <div class="mx-8">
		<div class=" sm-mx-2 h-screen ">
			<v-row class="w-100 h-75">
				<v-col class="h-100" cols="12"  md="12" order-md=2 >
					<div class="h-100 " >
						<v-parallax
                        scale="0.8"
							:src="image"
							aspect-ratio="16/9"
							
							alt=""
							class="w-100 md-w-75 border grayscale  elevation-20 "
							cover
                            z-index="2"
                            
                            
                            style="position: relative; filter:grayscale(810%);"
                            >
                            <v-content
							class="text-justify w-50  left  pl-25"
                            
                            absolute
							width="50px"
                            z-index="10"
                            style="position: absolute; top: 50%; translate: 0 -50%; z-index: 10;"
                            
						>
							<h2 class="text-primary">the chevrolet Impala</h2>
							<p class="text-secondary">
								The volkswagen beetle also known
								as the vw-bug, is a compact car
								that was first produced in the mid
								1930s. It became an iconic vehicle
								of the 1960s counterculture
								movement and is known for it's
								distinctive roundedc shape and air
								cooled engine
							</p>
						</v-content>
						</v-parallax>
					</div>
				</v-col>
				<v-col>
					<div class="h-30 align-self-end ">
						
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script setup>
const {image}=defineProps(['image'])
</script>

<style lang="scss" scoped>

</style>