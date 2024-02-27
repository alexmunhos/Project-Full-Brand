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
			slidesResponsive: [
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m598918.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m7796623.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m45486.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m3340572.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m3892733.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m3545163.webp"},
				{image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498b018a413882436_m5335360.webp"}
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
	}
};
</script>
  
<style scoped>
.background {
	background-color: #131313;
	height: 1000px;
	width: 1200px;
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
	margin: 0 auto;
	padding-top: 90px;
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
	width: 310px;
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
        background-color: #131313;
        height: 1100px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 1100px;
        display: block;
    }

	.title {
		font-size: 28px;
		width: 90%;
		margin: 0 auto;
		padding-top: 10px;
	}

	.text-center {
		margin-top: 30px;
		width: 90%;
		margin: 30px auto 0 auto;
		font-size: 15px;
	}

	.slideshow {
		width: 90%;
		position: relative;
		margin: 50px auto auto auto;
	}
}
</style>
