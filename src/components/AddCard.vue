<template>
    <div class="wrapper">
        <div>
            <h1>ADD A NEW CARD</h1>
            <form id="form">
                <label>Card Holder Name</label><br>
                <input type="text" id="holderName" name="holderName" placeholder="Name of card holder"><br>
                <label>Bank Name</label><br>
                <input type="text" id="vendorName" name="vendorName" placeholder="Name of bank"><br>
                <label>Card number</label><br>
                <input type="text" id="cardNumber1" name="cardNumber" maxlength="4" placeholder="xxxx">
                <input type="text" id="cardNumber2" name="cardNumber" maxlength="4" placeholder="xxxx">
                <input type="text" id="cardNumber3" name="cardNumber" maxlength="4" placeholder="xxxx">
                <input type="text" id="cardNumber4" name="cardNumber" maxlength="4" placeholder="xxxx"><br>
                <label>Valid Thru</label><br>
                <input type="text" id="validDate" name="validDate" maxlength="5" placeholder="xx/xx"><br>
                <router-link to="/">
                    <button class="btn" value="Add card" v-on:click="createCard(cards)">ADD CARD</button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCard",
    props: ["cards"],
    methods: {  
            createCard: function (cards) {
                cards.push({
                        "id":5,
                        "holder":document.getElementById("holderName").value,
                        "vendor":document.getElementById("vendorName").value,
                        "cardnumber":document.getElementById("cardNumber1").value + ' ' +
                        document.getElementById("cardNumber2").value + ' ' +
                        document.getElementById("cardNumber3").value + ' ' +
                        document.getElementById("cardNumber4").value,
                        "valid":document.getElementById("validDate").value,
                        "isActive": false,
                        "color": "#4FC08D"
                  })
                alert(cards)
            }       
    }
}  

</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100vw;
    display: grid;
    justify-content: center;
    padding: 0;
    margin: 0;
    
}

.btn {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: black;
    border-radius: 8px;
    border: 1px solid black;
}

input {
    padding: 5px;
    margin: 5px;
}

label {
    margin: 5px;
}

</style>