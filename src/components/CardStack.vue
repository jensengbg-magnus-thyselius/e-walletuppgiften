<template>
    <div>
        <div v-for="card in cards" :key="card.id">
            <div v-if="card.isActive == false">
                  <Card class="cardOverlap" v-bind:selectedCard="{card}"
                     v-on:click.native="makeActive(cards, card)"/>
            </div>
        </div>
    </div>
</template>

<script>

    import Card from './Card';

    export default {
        name: "CardStack",
        props: ["cards"],
        methods: {  
            makeActive: function (cards, card) {
                  cards.forEach(element => {
                      if(element.id == card.id){
                          element.isActive = true
                      }
                      else{
                          element.isActive = false
                      }
                  });
            }       
        },
        components:{
            Card,
        },
    }


</script>

<style scoped>

.cardOverlap {
    margin-top: -40%;
}

.cardOverlap:hover {
    margin-right: 10%;
}

</style>