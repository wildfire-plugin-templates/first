<template>
  <div>
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

              