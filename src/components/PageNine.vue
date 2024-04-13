<template>
    <div class="background">
        <div class="container"> 
            <div class="title"> 
                Mais de 200 cases de sucesso registrados
            </div>
            <div class="line-style"> 

            </div>
            <div class="text"> 
                Projetos com resultados acima da média são transformados em cases de sucesso. Conheça alguns deles abaixo.
            </div>

			<div class="slideshow">
				<div v-if="isScreenSmall()">
					<div class="mySlides fade" v-for="(slide, index) in slidesResponsive" :key="index"
						v-show="index === currentSlideIndex">
						<img :src="slide.image" style="width:100%">
					</div>
				</div>
				<div v-else>
					<div class="mySlides fade" v-for="(slide, index) in slides" :key="index"
						v-show="index === currentSlideIndex">
						<img :src="slide.image" style="width:100%">
					</div>
				</div>
				
				<a class="prev" @click="changeSlide(-1)">❮</a>
				<a class="next" @click="changeSlide(1)">❯</a>
			</div>

			<Button class="input-style-submit" label="Receber atendimento" />

        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import teste from '../assets/PADUA.png'

export default {
	data() {
		return {
			slides: [
                { image: `${teste}`},
                { image: `${teste}`},
                { image: `${teste}`},
			],
			slidesResponsive: [
				{ image: `${teste}`},
				{ image: `${teste}`},
				{ image: `${teste}`},
			],
			currentSlideIndex: 0,
			intervalId: null // Adicionando uma variável para armazenar o ID do intervalo
		};
	},
	methods: {
		changeSlide(n) {
			clearInterval(this.intervalId); // Limpa o intervalo atual
			this.currentSlideIndex += n;
			if (this.currentSlideIndex >= this.slides.length) {
				this.currentSlideIndex = 0;
			} else if (this.currentSlideIndex < 0) {
				this.currentSlideIndex = this.slides.length - 1;
			}
			this.startInterval(); // Inicia um novo intervalo após mudar o slide
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
		this.startInterval(); // Inicia o intervalo quando o componente é montado
	},
	components: {
		Button
	}
};
</script>

<style scoped>

.background{
    background-color: black;
    height: 900px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 900px;
    margin: 0 auto;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.title{
    font-size: 30px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
}

.text{
    font-size: 20px;
    width: 600px;
    margin: 30px auto auto auto;
    text-align: center;
}

.button{
    padding: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
    margin: 50px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

/* Slideshow container */
.slideshow {
	width: 850px;
	position: relative;
	margin: 50px auto auto auto;
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

@media (max-width: 800px) {
    .background{
        background-color: black;
        height: 950px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 950px;
        display: block;
    }

	.slideshow {
		width: 90%;
		position: relative;
		margin: 50px auto auto auto;
	}

	.title{
		padding-top: 50px;
		width: 100%;
	}

	.text{
		width: 100%;
	}
}

</style>