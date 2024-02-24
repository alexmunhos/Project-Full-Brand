<template>
    <div class="background">
        <div class="container">
            <div class="title-first"> 
                Existe um método científico para que sua empresa nunca pare de vender
            </div>

            <div class="line-style"></div>

            <div class="text-first"> 
                Se você não seguí-lo, ela não vai sair do lugar
            </div>

            <div class="text-second"> 
                Método V4
            </div>

            <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab02775bc4395562108.svg" alt="Meu SVG">
        
            <div class="container-infos">
                <div class="info"> 
                    <div class="title-red"> 
                        Aquisição
                    </div>
                    <div class="content"> 
                        Atrair a atenção do público.
                    </div>
                </div>
                <div class="info"> 
                    <div class="title-red"> 
                        Engajamento:
                    </div>
                    <div class="content"> 
                        Construir confiança e interesse.
                    </div>
                </div>
                <div class="info"> 
                    <div class="title-red"> 
                        Monetização:
                    </div>
                    <div class="content"> 
                        Realizar vendas.
                    </div>
                </div>
                <div class="info"> 
                    <div class="title-red"> 
                        Retenção:
                    </div>
                    <div class="content"> 
                        Manter os clientes comprando.
                    </div>
                </div>
            </div>

            <div class="button-see"> 
                Quero ver isso na prática
            </div>
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: black;
    height: 1100px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 1000px;
    margin: 0 auto;
    text-align: center;
}

.title-first{
    font-size: 28px;
    width: 700px;
    margin: 100px auto auto auto;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.text-first{
    margin-top: 30px;
    font-size: 15px;
}

.text-second{
    margin-top: 50px;
    font-size: 20px;
}

.img-center{
    width: 800px;
    margin-top: 30px;
}

.container-infos{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 1200px;
    margin: 50px auto 0 auto;
}

.info{
    width: 210px;
    border-radius: 15px;
    height: 150px;
    background-color: #2a2a2a;
    border: solid 1px #464646;
    margin: 0px 30px;
    text-align: left;
}

.button-see{
    padding: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
    margin: 70px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

.title-red{
    color: red;
    margin: 30px 10px 0px 20px;
    font-weight: bold;
    font-size: 17px;
}

.content{
    margin: 15px 10px 0px 20px;
    font-size: 17px;
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

</style>