<template>
    <div class="background">
        <div class="container"> 
            <div class="block-one"> 
                <div class="title"> 
                    Um desses especialistas vai atender você
                </div>
                <div class="line-style"> 

                </div>
                <div class="button"> 
                    Quero receber atendimento
                </div>
            </div>
            <div class="images"> 
                <div class="img" style="z-index: 5;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0275c316981604565.webp" alt="Meu SVG">
                </div>
                <div class="img" style="right: 30px; z-index: 4;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274ef22962310397.webp" alt="Meu SVG">
                </div>
                <div class="img" style="right: 60px; z-index: 3;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b643064082743.webp" alt="Meu SVG">
                </div>
                <div class="img" style="right: 90px; z-index: 2;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274b8c1984445522.webp" alt="Meu SVG">
                </div>
                <div class="img" style="right: 120px; z-index: 1;"> 
                    <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab0274f4fd727448203.webp" alt="Meu SVG">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: #131313;
    height: 400px;
}

.container{
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    display: flex;
}

.block-one{
    width: 250px;
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
    position: relative;
    left: 100px;
    margin-top: 100px;
    display: flex;
}

.img{
    position: relative;
}

@media (min-width: 800px) and (max-width: 1200px) {
    .container{
        width: 100%;
    }

    .img-center{
        width: 100px;
    }
    .images{
        left: 0px;
    }
}


</style>