<template>
    <div>
        <div class="navbar">
            <img src="@/assets/5.-Logo_Full-brand-company-(Mono-Branco-Horizontal).png" class="img-full-brand-logo"
                alt="Minha Imagem">
        </div>

        <div class="container" :style="{'height': screenWidth}">
            <div class="sub-container" :style="{'height': screenWidth}">
                <div class="first-block"> 
                    <div class="question"> 
                        Procurando uma empresa de marketing?
                    </div>
                    <div class="title"> 
                        Tenha um time feito 
                        <span style="color: red;">sob medida</span>
                        para atender seu negócio
                    </div>
                    <div class="button"> 
                        QUERO MAIS INFORMAÇÕES
                    </div>
                </div>
                <img src="@/assets/bg-home.png" id="image" class="img-vitor" alt="Minha Imagem">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: null
        };
    },
    mounted() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        }
    }
};
</script>

<style scoped>
.navbar {
    background-color: #C60000;
    height: 60px;
    text-align: center;
    width: 1200px;
}

.container {
    background-color: #FCFAFA;
    width: 1200px;
}

.sub-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}

.img-full-brand-logo {
    width: 190px;
    position: relative;
    bottom: 5px;
}

.first-block{
    width: 35%;
    color: black;
    padding-top: 100px;
    padding-left: 50px;
}

.title{
    font-size: 30px;
    font-weight: bold;
}

.button {
	padding: 13px 20px 20px 20px;
	width: 250px;
	height: 12px;
	text-align: center;
	margin: 15px auto 0 0;
	background-color: #159711;
	border-radius: 10px;
    color: white;
    font-size: 15px;
}

.img-vitor {
    width: 65%;
}

@media (min-width: 1200px) {
    .navbar{
        width: 100%;
    }

    .container{
        width: 100%;
    }
}
</style>