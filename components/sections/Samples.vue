<template>
  <section id="samples">
      <div class="container">
        <div class="row">
            <h2 class="mb-2">The Collection so far</h2>
        </div>
          <div class="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
              <sample v-for="image in images" :number="image.pathShort.replace('./','').replace('.png','')" :key="image.pathShort.replace('./','').replace('.png','')" />
              <sample number="1" />
          </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.importAll(require.context('~/assets/images/samples/images/', true, /\.png$/));
    console.log(this.images)
  },
  methods: {
      importAll(r) {
        r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
      },
  },


}
</script>

<style>

</style>