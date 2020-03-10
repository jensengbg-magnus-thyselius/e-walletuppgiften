<template>
<div class="homewrapper">
    <div class="header">
        <p>header</p>
    </div>
        <div class="activecard" v-for="card in cards" :key="card.id">
            <div v-if="card.isActive == true">
                <div class="cardSize">
                <Card v-bind:selectedCard="{card}"/>
                </div>
            </div>
            <!-- v-for="card in cards" :key="card.id" -->
        </div>
    <div class="cardstack">
        <CardStack v-bind:cards="cards"/>
    </div>
    <div class="addnew">
        <router-link to="/addcard"><button>Add new card</button></router-link>
        
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
    border:3px black solid;
    display: grid;
    padding: 0;
    grid-template-areas:
    "header"
    "activecard"
    "cardstack"
    "addnew";
}

.cardSize {
    display: inline-flex;
    flex-direction: column;
    width: 10%;
}

.header {
grid-area: header;
}

.activecard {
grid-area: activecard;
margin-bottom: 10%;
}

.cardstack {
grid-area: cardstack;
}

.addnew {
grid-area: addnew;
}

</style>