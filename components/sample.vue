<template>
  <div class="col sample">
        <div class="card">
        <div class="card-body text-dark text-center">
            <img :alt="`${name} DNA ${dna}`" style="width:100%" :src="require(`~/assets/images/samples/images/${number}.png`)" />
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['number'],
    data(){
        const item = require(`~/assets/images/samples/json/${this.number}.json`);
        console.log(item);
        return {
            name: item.name,
            dna: item.dna,
        }
    }
}
</script>
