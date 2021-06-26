<template>
  <div>
    app template

    <div v-for="n in 10">
      {{ n }}
    </div>

    <div v-html="foo"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: "foo"
    };
  },
  mounted() {
    const foo2 = "das";

    console.log("Foo mounted");
  }
};
</script>
