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

            <!-- <div class="carousel">
                <img v-for="(image, index) in images" :key="index" :src="image" :style="{ 'z-index': currentIndex === index ? 1 : 0 }" />
                <div class="controls prev" @click="prevSlide">&#10094;</div>
                <div class="controls next" @click="nextSlide">&#10095;</div>
            </div> -->

            <div class="button"> 
                Quero um marketing feito sob medida
            </div>
        </div>
    </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      images: [
        'https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768317950884.webp',
        'https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768319258897.webp',
        'https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768313945507.webp',
        'https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/mobile/350566_1_1698344999653ab0273e9f84387768319845124.webp'
      ],
      currentIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextSlide, 2000);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script> -->



<style scoped>

.background{
    background-color: #131313;
    height: 1000px;
}

.container{
    width: 1200px;
    height: 1000px;
    margin: 0 auto;
    text-align: center;
}

.title{
    font-size: 28px;
    width: 700px;
    margin: 0 auto 0 auto;
    padding-top: 50px;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.text-center{
    margin-top: 30px;
    width: 500px;
    margin: 30px auto 0 auto;
    font-size: 15px;
}

.button{
    padding: 20px;
    width: 350px;
    height: 20px;
    text-align: center;
    margin: 70px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

.carrousel{
    height: 600px;
}

@media (min-width: 800px) and (max-width: 1200px) {

    .container{
        width: 100%;
    }

}










/* 
.carousel {
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.carousel img {
  width: 100%;
  height: auto;
  display: none;
  position: absolute;
}
.controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
} */

</style>