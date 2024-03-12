<template>
    <div class="flex flex-column gap-2">
      <InputText id="username" v-model="name" aria-describedby="username-help" />
      <InputNumber v-model="age" inputId="integeronly" />
      <Button label="Submit" @click="clickButton" />
    </div>
  </template>
  
  <script>
  import { collection, addDoc } from "firebase/firestore";
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import InputNumber from 'primevue/inputnumber';
  import { db } from './firebase'; // Importe a instância do Firebase Firestore
  
  export default {
    data() {
      return {
        name: '',
        age: 0
      };
    },
    methods: {
      async clickButton() {
        try {
          // Adicione os dados ao Firestore
          const docRef = await addDoc(collection(db, "teste"), {
            nome: this.name,
            idade: this.age
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
    components: {
      InputText,
      Button,
      InputNumber
    }
  };
  </script>
  