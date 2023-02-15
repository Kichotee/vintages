<template>
    <div class="mx-8 my-2  h-screen ">

        

            <v-row class="w-100">
                <v-col cols="12" md="8" class="h-100">
                    <div class=" h-75" >
                <v-img 
                
                    :src="image"
                    aspect-ratio="16/9"
                    style="filter: grayscale(90%);"
                    alt=""
                    height="400"
                    class="w-100 md-w-75 border grayscale "
                    cover
                    appear
                    @enter="imgEnter"
                    @before-enter="imgBeforeEnter"
                >
                </v-img>
            </div>
                </v-col>
                <v-col
                align-self="center"
                >
                    
                    <div class="h-30  ">
                        <v-content
                            outlined
                            class="h-50 text-center  pl-25 "
                            width="50px"
                            
                        >
                            <h2>the 1967 beetle</h2>
                            <p class="text-primary ">
                                The volkswagen beetle also known as the vw-bug, is a compact car that was first produced in the mid 1930s. 
                                It became an iconic vehicle of the 1960s counterculture movement and is known for it's distinctive roundedc shape and air cooled engine
                            </p>
                        </v-content>
                    </div>
                </v-col>
            </v-row>
    

       
    </div>
	
	
</template>

<script setup>
   import gsap from 'gsap';

   const {image}= defineProps(['image']);
   


</script>

<style lang="scss" scoped></style>
