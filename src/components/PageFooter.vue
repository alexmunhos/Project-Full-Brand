<template>
    <div class="background">
        <div class="container"> 
            <div class="first-block"> 
                <div class="logo-full"> 
                    <img class="img" src="https://cdn.greatpages.com.br/lp.v4company.com-assessoria-go-modular-b/1707397692/imagens/desktop/350566_1_1698344999653ab027520e2980834135.svg" alt="Meu SVG">
                </div>
                <div class="return"> 
                    Retornar ao Topo
                </div>
            </div>
            <div class="second-block"> 
                2024 © Full Brand. Todos os direitos reservados. Políticas de privacidade
            </div>
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: white;
    height: 200px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 200px;
    margin: 0 auto;
}

.first-block{
    height: 120px;
    margin: 0 100px;
    border-bottom: 1px solid rgb(216, 216, 216);
    display: flex;
}

.second-block{
    text-align: center;
    margin-top: 32px;
    color: rgb(162, 162, 162);
}

.return{
    color: red;
    width: 50%;
    margin-top: 50px;
    text-align: end;
    font-size: 20px;
}

.logo-full{
    width: 50%;
}

.img{
    width: 200px;
    margin: 30px 0px 0px 100px;
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

</style>