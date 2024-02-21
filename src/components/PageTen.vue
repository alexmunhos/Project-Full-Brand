<template>
    <div class="background"> 
        <div class="container"> 
            <div class="title"> 
                Somos parceiros de alguns dos executivos 
                <span style="color: red;">mais relevantes</span>
                do mercado brasileiro
            </div>
            <div class="line-style"> 

            </div>
            <div class="text"> 
                Todos eles formam o conselho consultivo que nos mantém evoluindo constantemente
            </div>

            <div class="slideshow">
				<div class="mySlides fade" v-for="(slide, index) in slides" :key="index"
					v-show="index === currentSlideIndex">
					<img :src="slide.image" style="width:100%">
				</div>
				
				<a class="prev" @click="changeSlide(-1)">❮</a>
				<a class="next" @click="changeSlide(1)">❯</a>
			</div>

            <div class="button"> 
                Receber Atendimento
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			slides: [
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177582649475.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177584321819.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177581602240.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177583728238.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177583128465.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177581942863.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab02777a556480177588009584.webp"},
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
		}
	},
	mounted() {
		this.startInterval(); // Inicia o intervalo quando o componente é montado
	}
};
</script>

<style scoped>

.background{
    background-color: black;
    height: 900px;
}

.container{
    width: 1200px;
    height: 900px;
    margin: 0 auto;
}

.title{
    font-size: 30px;
    width: 700px;
    margin: 0 auto;
    text-align: center;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
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
    margin: 70px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

/* Slideshow container */
.slideshow {
	width: 850px;
	position: relative;
	margin: 30px auto auto auto;
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

@media (min-width: 800px) and (max-width: 1200px) {
    .container{
        width: 100%;
    }

    .slideshow{
		width: 80%;
	}

    .next {
		right: 0px !important;
	}

	.prev {
		left: 0px;
	}
}
</style>