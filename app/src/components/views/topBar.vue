<template>
    <div class="topBarView">
        <v-item-group title="Pages" selected-class="selected">
        <v-item v-slot="{ selectedClass, toggle }"><h1 id="home" @click="toggle" @mouseover="bigAndYellow('home')" @mouseout="backToNormal('home')" :class="selectedClass">Accueil</h1></v-item>
            <v-item  v-slot="{ selectedClass, toggle }"><h1 id="profil" @click="toggle" @mouseover="bigAndYellow('profil')" @mouseout="backToNormal('profil')" :class="selectedClass">Qui suis-je ?</h1></v-item>
            <v-item v-slot="{ selectedClass, toggle }"><h1 id="CV" @click="toggle" @mouseover="bigAndYellow('CV')" @mouseout="backToNormal('CV')" :class="selectedClass">Mon parcours</h1></v-item>
            <v-item v-slot="{ selectedClass, toggle }"><h1 id="projects" @click="toggle" @mouseover="bigAndYellow('projects')" @mouseout="backToNormal('projects')" :class="selectedClass">Mes projets</h1></v-item>
            <v-item v-slot="{ selectedClass, toggle }"><h1 id="offers" @click="toggle" @mouseover="bigAndYellow('offers')" @mouseout="backToNormal('offers')" :class="selectedClass">Mes offres</h1></v-item>
        </v-item-group>
    </div>
</template>

<script setup>


function bigAndYellow(page){
    if (document.getElementsByTagName('h1').){
        document.getElementById(page).style.transitionDelay = "0,5s";
        document.getElementById(page).style.transitionDuration = "1s";
        document.getElementById(page).style.fontSize = "small";
        document.getElementById(page).style.color = "white";
        return;
    }
    console.log(page);
    document.getElementById(page).style.transitionDelay = "0,5s";
    document.getElementById(page).style.transitionDuration = "1s";
    document.getElementById(page).style.fontSize = "x-large";
    document.getElementById(page).style.color = "#ffee01";
}

function backToNormal(page){
    if (document.getElementById(page).classList.contains("selected")){
        return;
    }
    console.log(page);
    document.getElementById(page).style.transitionDelay = "0,5s";
    document.getElementById(page).style.transitionDuration = "1s";
    document.getElementById(page).style.fontSize = "small";
    document.getElementById(page).style.color = "white";
}

</script>

<style scoped>
.topBarView {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: small;
    text-align: center;
    margin-top: 60px;
}
h1{
    display: inline-block;
    font-size: small;
    margin: 0 40px;
    color: white;
    cursor: pointer;
}

.selected{
    color: #ffee01;
    text-decoration: underline;
}
</style>