<template>
    <div class="background">
        <div class="container"> 
            <div class="block-one"> 
                <div class="title"> 
                    Um desses especialistas vai atender você
                </div>
                <div class="line-style"> 

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
                    Quero receber atendimento
                </div>
            </div>
            <div class="images" v-if="!isScreenSmall()"> 
                <div class="img" style="z-index: 5;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0275c316981604565.webp" alt="Meu SVG">
                </div>
                <div class="img" style="left: 135px; z-index: 4;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274ef22962310397.webp" alt="Meu SVG">
                </div>
                <div class="img" style="left: 270px; z-index: 3;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b643064082743.webp" alt="Meu SVG">
                </div>
                <div class="img" style="left: 405px; z-index: 2;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b8c1984445522.webp" alt="Meu SVG">
                </div>
                <div class="img" style="left: 540px; z-index: 1;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274f4fd727448203.webp" alt="Meu SVG">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			slides: [
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0275c316981604565.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274ef22962310397.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b643064082743.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b8c1984445522.webp"},
                { image: "https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274f4fd727448203.webp"},
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
    background-color: #131313;
    height: 400px;
    width: 1200px;
}

.container{
    width: 1000px;
    height: 400px;
    margin: 0 auto;
    display: flex;
}

.block-one{
    width: 270px;
    margin-top: 70px;
}

.title{
    font-size: 30px;
}

.line-style{
    width: 100px;
    height: 3px;
    margin-top: 30px;
    background-color: red;
}

.button{
    padding: 20px;
    width: 230px;
    height: 20px;
    text-align: center;
    margin: 30px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

.images{
    margin-top: 100px;
    position: relative;
    left: 40px;
    display: flex;
}

.img{
    position: absolute;
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
        height: 650px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 650px;
        display: block;
    }

    .title{
        padding-top: 35px;
    }

	.slideshow {
		width: 70%;
		position: relative;
		margin: 50px auto auto auto;
	}

    .block-one{
        width: 100%;
        margin-top: 30px;
        text-align: center;
    }

    .line-style{
        margin: 30px auto 0 auto;
    }

    .button{
        margin: 60px auto 0 auto;
    }

}


</style>