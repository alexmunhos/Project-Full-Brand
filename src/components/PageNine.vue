<template>
    <div class="background">
        <div class="container"> 
            <div class="title"> 
                Mais de 200 cases de sucesso registrados
            </div>
            <div class="line-style"> 

            </div>
            <div class="text"> 
                Projetos com resultados acima da média são transformados em cases de sucesso. Conheça alguns deles abaixo.
            </div>

            <!-- Carrosel -->

            <div class="button"> 
                Receber atendimento
            </div>
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: black;
    height: 900px;
}

.container{
    width: 1200px;
    height: 900px;
    margin: 0 auto;
}

.line-style{
    width: 100px;
    height: 3px;
    margin: 30px auto auto auto;
    background-color: red;
}

.title{
    font-size: 30px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
}

.text{
    font-size: 20px;
    width: 600px;
    margin: 30px auto auto auto;
    text-align: center;
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

@media (min-width: 800px) and (max-width: 1200px) {
    .container{
        width: 100%;
    }
}

</style>