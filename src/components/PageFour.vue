<template>
	<div class="background">
		<div class="container">
			<div class="title">
				A V4 Company estrutura o marketing da sua empresa com soluções feitas
				<span style="color: red;">sob medida</span>
			</div>

			<div class="line-style">
			</div>

			<div class="text-center">
				Conheça todos os serviços que oferecemos para que sua empresa tenha mais resultados
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
				Quero um marketing feito sob medida
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			slides: [
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768317950884.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768318957429.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768316262894.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768318545403.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768319845124.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768313945507.webp" },
				{ image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768319258897.webp" },
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
.background {
	background-color: #131313;
	height: 1000px;
}

.container {
	width: 1200px;
	height: 1000px;
	margin: 0 auto;
	text-align: center;
}

.title {
	font-size: 28px;
	width: 700px;
	margin: 0 auto 0 auto;
	padding-top: 50px;
}

.line-style {
	width: 100px;
	height: 3px;
	margin: 30px auto auto auto;
	background-color: red;
}

.text-center {
	margin-top: 30px;
	width: 500px;
	margin: 30px auto 0 auto;
	font-size: 15px;
}

.button {
	padding: 20px;
	width: 350px;
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

	.container {
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
