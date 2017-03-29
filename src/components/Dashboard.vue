<template lang="jade">
  .h-100
    SidebarMenu
    RightContent
      MainHeader
      MainContent
        router-view
</template>

<script>
  import SidebarMenu from '@/components/common/SidebarMenu';
  import MainContent from '@/components/common/MainContent';
  import MainHeader from '@/components/common/MainHeader';
  import RightContent from '@/components/common/RightContent';

  export default {
    components: {
      SidebarMenu,
      MainContent,
      MainHeader,
      RightContent
    }
  }
</script>