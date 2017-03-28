<template lang="jade">
  .h-100
    SidebarMenu
    MainContent
      router-view
</template>

<script>
  import SidebarMenu from '@/components/common/SidebarMenu';
  import MainContent from '@/components/common/MainContent'

  export default {
    components: {
      SidebarMenu,
      MainContent
    }
  }
</script>