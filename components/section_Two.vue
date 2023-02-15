<template>
	<div>
		<div class="mx-4 sm-mx-2 h-screen ">
			<v-row class="w-100 h-100">
				<v-col class="h-100" cols="12"  md="6" order-md=2 >
					<div class="h-100 "  
					@enter="imgEnter"
                    @before-enter="imgBeforeEnter">
						<v-img
							:src="image"
							aspect-ratio="16/9"
							style="filter: grayscale(90%)"
							alt=""
							class="w-100 md-w-75 border grayscale "
							cover
						>
						</v-img>
					</div>
				</v-col>
				<v-col align-self="center">
					<div class="h-30 align-self-end ">
						<div
							class="text-justify  pl-25"
							width="50px"
						>
							<h2 class="">the chevrolet Impala</h2>
							<p class="text-primary">
								The volkswagen beetle also known
								as the vw-bug, is a compact car
								that was first produced in the mid
								1930s. It became an iconic vehicle
								of the 1960s counterculture
								movement and is known for it's
								distinctive roundedc shape and air
								cooled engine
							</p>
						</div>
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script setup>
	const { image } = defineProps(["image"]);
	const imgBeforeEnter=ref()
	const imgEnter=ref()


		 imgBeforeEnter.value= (el)=>{
		gsap.from(el,{
			opacity:0,
			x:'100%'
		})
	   }
	    imgEnter.value=(el)=>{
		gsap.to(el,{
			
			scrollTrigger:{
			opacity:1,
			x:0,
			}
		})
	   }
	
</script>

<style lang="scss" scoped></style>
