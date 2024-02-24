<template>
    <div class="background">
        <div class="container"> 
            <div class="title"> 
                Por que a V4 Company?
            </div>
            <div class="line-style"> 

            </div>
            <div class="img"> 
                <img class="img-center" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab02744dc9409773839.svg" alt="Meu SVG">
            </div>
            <div class="button"> 
                Quero a ajuda de vocês
            </div>            
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: black;
    height: 730px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 730px;
    margin: 0 auto;
}

.title{
    font-size: 25px;
    text-align: center;
    margin-top: 50px;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.img{
    text-align: center;
    margin-top: 30px;
}

.img-center{
    width: 1050px;
}

.button{
    padding: 20px;
    width: 200px;
    height: 20px;
    text-align: center;
    margin: 30px auto 0 auto;
    background-color: #159711;
    border-radius: 10px;
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}
</style>