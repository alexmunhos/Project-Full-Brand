<template>
    <div class="background">
        <div class="container">
            <div class="block-one"> 
                <div class="content-one"> 
                    <div class="title"> 
                        Vamos projetar o marketing da sua empresa conforme a necessidade dela
                    </div>
                    <div class="line-style"></div>
                    <div class="sub-text"> 
                        Tenha um braço a mais para ajudar seu time ou terceirize todo seu marketing com a V4, dessa forma você não se preocupa com contratação, gestão desse time, riscos trabalhistas e outras burocracias. 
                    </div>
                </div>
                <div> 
                    <img class="img-center-one" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab02756b20306126307.svg" alt="Meu SVG">
                </div>
            </div>
            
            <div class="block-two"> 
                <div v-if="!isScreenSmall()">
                    <img class="img-center-two" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab02754a0f937458483.svg" alt="Meu SVG">
                </div>
                <div class="content-two"> 
                    <div class="title"> 
                        Você pode personalizar o plano que mais se adeque ao  seu momento
                    </div>
                    <div class="line-style"> 

                    </div>
                    <div class="sub-text"> 
                        Todos esses serviços são divididos em planos. Você pode ajustar conforme sua disponibilidade de investimento. O importante é não desistir de investir no que vai transformar a realidade do seu negócio.
                    </div>
                </div>
                <div v-if="isScreenSmall()">
                    <img class="img-center-two" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-seg/1708992213/imagens/mobile/496864_1_170897935265dcf498a8a33017439596.svg" alt="Meu SVG">
                </div>
            </div>

            <div class="button"> 
                Agendar uma reunião
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    isScreenSmall() {
        return window.innerWidth < 801;
    }
  }
};
</script>

<style scoped>

.background{
    background-color: black;
    height: 1150px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 1200px;
    margin: 0 auto;
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

.block-one{
    width: 1000px;
    margin: 80px auto 0 auto;
    background: linear-gradient(#0D0D0D, black) padding-box,
              linear-gradient(to bottom, #6C6C6C, black) border-box;
    border-radius: 40px;
    border: 1px solid transparent;
    display: flex;
    height: 420px;
}

.img-center-one{
    height: 600px;
    position: relative;
    bottom: 90px;
    left: 15px;
}

.content-one{
    margin: 80px 0px 0px 60px;
}

.title{
    font-size: 20px;
}

.line-style{
    width: 100px;
    height: 3px;
    margin-top: 30px;
    background-color: red;
}

.sub-text{
    margin-top: 30px;
}

.block-two{
    width: 1000px;
    margin: 100px auto 0 auto;
    background: linear-gradient(#0D0D0D, black) padding-box,
              linear-gradient(to bottom, #6C6C6C, black) border-box;
    border-radius: 40px;
    border: 1px solid transparent;
    display: flex;
    height: 420px;
}

.content-two{
    margin: 80px 50px 0px 60px;
}

.img-center-two{
    height: 350px;
    position: relative;
    left: 30px;
    top: 30px;
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

@media (max-width: 800px) {
    .background{
        background-color: black;
        height: 1600px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 1600px;
        display: block;
    }

    .block-one{
        width: 100%;
        display: block;
        height: 700px;
    }

    .block-two{
        width: 100%;
        margin-top: 20px;
        display: block;
        height: 700px;
    }

    .content-one{
        margin: 40px;
        text-align: center;
    }

    .content-two{
        text-align: center;
        margin: 40px;
    }

    .line-style{
        margin: 30px auto 0 auto;
    }

    .img-center-one{
        width: 100%;
        height: auto;
        position: relative;
        bottom: 50px;
        left: 0px;
    }

    .img-center-two{
        width: 85%;
        height: auto;
        position: relative;
        left: 7.5%;
        top: 0;
    }

    .button{
        margin: 50px auto 0 auto;
    }
}

</style>