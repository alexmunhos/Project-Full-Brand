<template>
    <div class="app">
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>
        <PageFive/>
        <PageSix/>
        <PageSeven/>
        <PageEight/>
        <PageNine/>
        <PageTen/>
        <PageFooter/>
    </div>
</template>

<script>
import PageOne from './PageOne.vue';
import PageTwo from './PageTwo.vue';
import PageThree from './PageThree.vue';
import PageFour from './PageFour.vue';
import PageFive from './PageFive.vue';
import PageSix from './PageSix.vue';
import PageSeven from './PageSeven.vue';
import PageEight from './PageEight.vue';
import PageNine from './PageNine.vue';
import PageTen from './PageTen.vue';
import PageFooter from './PageFooter.vue';
export default {
    components: {
        PageOne, 
        PageTwo, 
        PageThree, 
        PageFour, 
        PageFive, 
        PageSix, 
        PageSeven, 
        PageEight, 
        PageNine, 
        PageTen, 
        PageFooter
    }
}
</script>

<style>

html, body {
    margin: 0;
    padding: 0;
    background: #000000;
    color: white;
    font-family: 'Montserrat', sans-serif;
}


@media only screen and (max-width: 800px) {
.app {
    zoom: 66.7%;
}
}

@media only screen and (min-width: 801px) and (max-width: 1200px) {
.app {
    zoom: calc(0.3333 * (100vw - 400px) + 66.7%);
}
}

@media only screen and (min-width: 1201px) {
.app {
    zoom: 100%;
}
}

</style>
