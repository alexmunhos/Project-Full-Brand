<template>
    <div>
        <div class="navbar">
            <img src="@/assets/5.-Logo_Full-brand-company-(Mono-Branco-Horizontal).png" class="img-full-brand-logo"
                alt="Minha Imagem">
        </div>

        <div class="container" :style="{'height': screenWidth}">
            <div class="sub-container" :style="{'height': screenWidth}">
                <img src="@/assets/imagem-bg1.png" id="image" class="img-vitor" alt="Minha Imagem">
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
}

.container {
    background-color: #FCFAFA;
}

.sub-container {
    width: 1200px;
    margin: 0 auto;
}

.img-full-brand-logo {
    width: 190px;
    position: relative;
    bottom: 5px;
}

.img-vitor {
    width: 1200px;
}

@media (min-width: 800px) and (max-width: 1200px) {
    .img-vitor {
        width: 100%;
    }

    .sub-container {
        width: 100%;
    }
}
</style>