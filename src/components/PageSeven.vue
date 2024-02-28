<template>
    <div class="background">
        <div class="container"> 
            <div class="title"> 
                Por que a V4 Company?
            </div>
            <div class="line-style"> 

            </div>
            <div class="img" v-if="!isScreenSmall()"> 
                <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab02744dc9409773839.svg" alt="Meu SVG">
            </div>

            <div v-if="isScreenSmall()" style="margin: 40px 0 0 60px;">
                <div style="display: flex;">
                    <div class="style-ball" style="background-color: #CECECE;"></div>
                    <span class="style-text-ball">Prestador de Serviço</span> 
                </div>
                
                <div style="display: flex;">
                    <div class="style-ball" style="background-color: #262626;"></div>
                    <span class="style-text-ball">Agências</span>
                </div>
                
                <div style="display: flex;">
                    <div class="style-ball" style="background-color: #E50914;"></div>
                    <span class="style-text-ball">V4 Company</span>
                </div>
            </div>
            <div class="slideshow" v-if="isScreenSmall()">  
                <div class="mySlides fade" v-for="(slide, index) in slides" :key="index"
                    v-show="index === currentSlideIndex">
                    <img :src="slide.image" style="width:100%">
                </div>
                
                <a class="prev" @click="changeSlide(-1)">❮</a>
                <a class="next" @click="changeSlide(1)">❯</a>
            </div>


            <div class="button"> 
                Quero a ajuda de vocês
            </div>            
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			slides: [
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf4991eb89155725584_d2802764.svg"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf4991eb89155725584_d2802764.svg"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf4991eb89155725584_d9601969.svg"},
			],
			currentSlideIndex: 0,
			intervalId: null
		};
	},
	methods: {
		changeSlide(n) {
			clearInterval(this.intervalId);
			this.currentSlideIndex += n;
			if (this.currentSlideIndex >= this.slides.length) {
				this.currentSlideIndex = 0;
			} else if (this.currentSlideIndex < 0) {
				this.currentSlideIndex = this.slides.length - 1;
			}
			this.startInterval(); 
		},
		currentSlide(n) {
			this.currentSlideIndex = n;
		},
		startInterval() {
			this.intervalId = setInterval(() => {
				this.changeSlide(1);
			}, 4000);
		},
		isScreenSmall() {
            return window.innerWidth < 801;
        }
	},
	mounted() {
		this.startInterval();
	}
};
</script>

<style scoped>

.background{
    background-color: black;
    height: 730px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 730px;
    margin: 0 auto;
}

.title{
    font-size: 25px;
    text-align: center;
    margin-top: 50px;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.img{
    text-align: center;
    margin-top: 30px;
}

.img-center{
    width: 1050px;
}

.button{
    padding: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
    margin: 30px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

.style-ball{
    width: 20px; 
    margin-bottom: 15px; 
    height: 20px; 
    border-radius: 50%;
}

.style-text-ball{
    position: relative; 
    left: 20px;  
}

/* Next & previous buttons */
.next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	right: -50px !important;
	width: auto;
	padding: 16px;
	margin-top: -22px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
}

.prev {
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: -50px;
	width: auto;
	padding: 16px;
	margin-top: -22px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
}

/* Position the "next button" to the right */
.next {
	right: 0;
	border-radius: 3px 0 0 3px;
}

/* Fading animation */
.fade {
	animation-name: fade;
	animation-duration: 1.5s;
}

@keyframes fade {
	from {
		opacity: .4
	}

	to {
		opacity: 1
	}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {

	.prev,
	.next,
	.text {
		font-size: 11px
	}
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

@media (max-width: 800px) {

    .background{
        background-color: black;
        height: 730px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 730px;
        display: block;
    }

    .slideshow {
		width: 90%;
		position: relative;
		margin: 30px auto auto auto;
	}

}
</style>