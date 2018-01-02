<template>
  <div class="example">
    \{{i18next.t('{{module_name}}.greeting')}}
  </div>
</template>
<script>
export default {
  name: '{{name}}',
  props: ['bus'],
  computed: {
    i18next () {
      return this.bus.i18next
    }
  }
}
</script>
<style scoped>
.example {
  margin-top: -30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

              