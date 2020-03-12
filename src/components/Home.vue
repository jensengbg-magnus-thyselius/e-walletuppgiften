<template>
<div class="homewrapper">
    <div class="header">
        <div>
            <h1>E-WALLET</h1>
        </div>
    </div>
        <div class="activecard" v-for="card in cards" :key="card.id">
            <div v-if="card.isActive == true">
                <div>
                <Card v-bind:selectedCard="{card}"/>
                </div>
            </div>
        </div>
    <div class="cardstack">
        <CardStack v-bind:cards="cards"/>
    </div>
    <div class="addnew">
        <router-link to="/addcard"><button class="btn">ADD A NEW CARD</button></router-link>
        
    </div>
</div>
</template>

<script>
import CardStack from './CardStack';
import Card from './Card';

export default {
    name: "Home",
    components: {
    CardStack,
    Card
  },
    props: ["cards"]
}
</script>

<style scoped>
.homewrapper {
    height: 100vh;
    width: 100vw;
    display: grid;
    justify-content: center;
    padding: 0;
    margin: 0;
    grid-template-areas:
    "header"
    "activecard"
    "cardstack"
    "addnew";
}

.header {
    grid-area: header;
    height: 20%;
    width: 100%;

}

.activecard {
    grid-area: activecard;
    height: 30%;
    width: 100%;
    margin-bottom: 50%;

}

.cardstack {
    grid-area: cardstack;
    height: 30%;
    width: 100%;

}

.addnew {
    grid-area: addnew;
    height: 20%;
    width: 100%;

}

.btn {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid black;
}

</style>