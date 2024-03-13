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

                <div class="info" style="display: block;">
                    <div style="display: flex;">
                        <div class="img-first">
                            <img src="@/assets/icon-planilha.png" class="icon" alt="Minha Imagem">
                        </div>
    
                        <div class="img-last">
                            <span class="number-1">1</span>
                        </div>
                    </div>

                    <div class="text-center-1">
                        <div class="title-text-first">
                            Preencha o formulário
                        </div>

                        <div class="title-text-second">
                            Envie suas informações de cntato. Todos os seus dados estarão seguros, vamos cuidar bem deles.
                        </div>
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
                    <InputText class="input-style" v-model="name" placeholder="Qual seu nome?"/>
                    <InputText class="input-style" v-model="email" placeholder="E-mail corporativo"/>
                    <InputNumber class="input-style" v-model="fone" placeholder="Seu Telefone"/>
                    <InputText class="input-style" v-model="nameCompany" placeholder="Qual o nome da sua empresa?"/>
                    <Dropdown class="input-style-dropdown" :showClear="true"  v-model="monthlyBilling" placeholder="Qual o faturamento mensal da sua empresa?" :filter="true" optionLabel="name" :options="optionsMonthlyBilling"/>
                    <Dropdown class="input-style-dropdown" :showClear="true" v-model="occupationArea" placeholder="Qual o seu segmento?" :filter="true" optionLabel="name" :options="optionsOccupationArea"/>
                    <Toast ref="toast" />
                    <Button class="input-style-submit" label="Receber mais Informações" @click="clickButton" />
                </div>
            </div>
        </div>

        <Dialog v-model:visible="dialogSuccess" modal header="Dados Recebidos" :style="{ width: '25rem' }">
            <div class="flex align-items-center gap-3 mb-3">
                Suas informações foram enviadas com sucesso, aguarde pois em breve entraremos em contato!
            </div>
        </Dialog>

        <Dialog v-model:visible="dialogError" modal header="Erro" :style="{ width: '25rem' }">
            <div class="flex align-items-center gap-3 mb-3">
                Houve um erro no envio dos seus dados, peço que aguarde alguns minutos até resolvermos!
            </div>
        </Dialog>
    </div>
</template>

<script>
    import { collection, addDoc } from "firebase/firestore";
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    import InputNumber from 'primevue/inputnumber';
    import Dropdown from 'primevue/dropdown';
    import { db } from './firebase';
    import Toast from 'primevue/toast';
    import Dialog from 'primevue/dialog';

    export default {
        data() {
            return {
                dialogSuccess: false,
                dialogError: false,
                occupationArea: null,
                monthlyBilling: null,
                nameCompany: null,
                fone: null,
                email: null,
                name: null,
                optionsMonthlyBilling: [
                    { name: "Até 20 mil" },
                    { name: "De 21 mil à 50 mil" },
                    { name: "De 51 mil à 70 mil" },
                    { name: "De 71 mil à 100 mil" },
                    { name: "De 101 mil à 400 mil" },
                    { name: "De 401 mil à 1 milhão" },
                    { name: "De 1 à 4 milhões" },
                    { name: "De 4 à 16 milhões" },
                    { name: "De 16 à 64 milhões" },
                    { name: "Mais de 64 milhões" }
                ],
                optionsOccupationArea: [
                    { name: "Serviço" },
                    { name: "Varejo" },
                    { name: "Indústria" },
                    { name: "E-commerce" },
                    { name: "Food Service" },
                    { name: "Educação" },
                    { name: "Imobiliária" },
                    { name: "SAAS" },
                    { name: "Finanças" },
                    { name: "Franquia" },
                    { name: "Telecom" },
                    { name: "Energia Solar" },
                    { name: "Turismo" },
                    { name: "Outro" }
                ]
            };
        },
        methods: {
            async clickButton() {
                if(this.occupationArea === null || this.monthlyBilling === null || this.nameCompany === null || this.fone === null || this.email === null || this.name === null ||
                    this.occupationArea === '' || this.monthlyBilling === '' || this.nameCompany === '' || this.fone === '' || this.email === '' || this.name === ''){
                    this.$refs.toast.add({ 
                        severity: 'error', 
                        summary: 'Campos Vazios', 
                        detail: 'Nenhum campo deve ser vazio', 
                        life: 3000 
                    });
                    return;
                }

                try {
                    await addDoc(collection(db, "Clientes"), {
                        occupationArea: this.occupationArea,
                        monthlyBilling: this.monthlyBilling,
                        nameCompany: this.nameCompany,
                        fone: this.fone,
                        email: this.email,
                        name: this.name
                    });
                    this.dialogSuccess = true;
                } catch (e) {
                    this.dialogError = true;
                }
            }
        },
        components: {
            InputText,
            Button,
            InputNumber,
            Dropdown,
            Toast,
            Dialog
        }
    };
</script>

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
    height: 50px;
    margin-top: 30px;
    border-radius: 5px;
}

.input-style-dropdown{
    width: 85%;
    height: 50px;
    margin-top: 30px;
    border-radius: 5px;
    text-align: left;
    align-items: center;
}

.input-style-submit{
    background-color: #18B012;
    width: 85%;
    height: 50px;
    margin-top: 30px;
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