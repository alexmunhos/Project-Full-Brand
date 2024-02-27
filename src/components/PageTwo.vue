<template>
    <div class="background">
        <div class="container">
            <div class="first">
                <div class="title">
                    <span class="title-first">Dar o próximo passo leva menos de um minuto</span>
                    <div class="line-style"></div>
                </div>
                <div class="info">
                    <div class="img-first">
                        <img src="@/assets/icon-planilha.png" class="icon" alt="Minha Imagem">
                    </div>

                    <div class="text-center-1">
                        <div class="title-text-first">
                            Preencha o formulário
                        </div>

                        <div class="title-text-second">
                            Envie suas informações de cntato. Todos os seus dados estarão seguros, vamos cuidar bem deles.
                        </div>
                    </div>

                    <div class="img-last">
                        <span class="number-1">1</span>
                    </div>
                </div>
                <div class="info">
                    <div class="img-first">
                        <span class="number-2">2</span>
                    </div>

                    <div class="text-center-2">
                        <div class="title-text-first">
                            Receba uma ligação
                        </div>

                        <div class="title-text-second">
                            Em até 12 horas, um dos nossos especialistas fará uma ligação para agendar a reunião mais importante com você.
                        </div>
                    </div>

                    <div class="img-last">
                        <img src="@/assets/icon-telefone.png" class="icon" alt="Minha Imagem">
                    </div>
                </div>
            </div>

            <div class="second">
                <div class="container-second">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="text" placeholder="Nome" class="input-style">
                    <input type="submit" value="Receber mais informações" class="input-style-submit">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.background{
    background-color: #131313;
    height: 850px;
    width: 1200px;
}

.container{
    width: 1200px;
    height: 850px;
    margin: 0 auto;
    display: flex;
}

.first{
    width: 50%;
    padding-top: 190px;
}

.second{
    width: 50%;
}

.container-second{
    width: 80%;
    margin: 100px auto auto auto;
    padding-top: 10px;
    height: 600px;
    border: solid 1px #464646;
    border-radius: 15px;
    text-align: center;
}

.info{
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    height: 150px;
    background-color: #2a2a2a;
    border: solid 1px #464646;
    margin-top: 50px;
    display: flex;
}

.line-style{
    background-color: red;
    height: 3px;
    width: 120px;
    margin-top: 30px;
}

.title{
    width: 80%;
    margin: 0 auto;
}

.input-style{
    width: 85%;
    height: 40px;
    margin-top: 30px;
    border-radius: 5px;
}

.input-style-submit{
    background-color: #18B012;
    width: 85%;
    height: 40px;
    margin-top: 50px;
    color: white;
}

.title-first{
    font-size: 30px;
}

.img-first{
    width: 20%;
    height: 100px;
}

.text-center-1{
    width: 80%;
    height: 100px;
    margin-top: 38px;
}

.text-center-2{
    width: 80%;
    height: 100px;
    margin-top: 33px;
}

.img-last{
    width: 20%;
    height: 100px;
}

.title-text-first{
    font-size: 18px;
}

.title-text-second{
    margin-top: 15px;
    font-size: 12px;
}

.icon{
    margin: 45px auto 0px 17px;
}

.number-1{
    position: relative;
    top: 45px;
    right: 25px;
    float: right;    
}

.number-2{
    position: relative;
    top: 45px;
    left: 25px;
}

@media (min-width: 1200px) {
    .background{
        width: 100%;
    }
}

@media(max-width: 800px){
    .background{
        background-color: #131313;
        height: 1500px;
        width: 100vw;
    }

    .container{
        width: 360px;
        height: 1500px;
        display: block;
    }

    .title{
        width: 100%;
        text-align: center;
    }

    .info{
        width: 95%;
        height: 250px;
    }

    .container-second{
        width: 100%;
    }

    .first{
        width: 90%;
        margin: 0 auto;
        padding-top: 20px;
    }

    .second{
        width: 90%;
        margin: 0 auto;
    }

    .line-style{
        margin: 20px auto 0 auto;
    }
}

</style>