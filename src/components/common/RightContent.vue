<template lang="jade">
  .mainContent.mr-0.mb-0
    slot
</template>

<style lang="scss" scoped>
.mainContent {
  -webkit-transition: margin 200ms ease-out;
  -moz-transition: margin 200ms ease-out;
  -o-transition: margin 200ms ease-out;
  transition: margin 200ms ease-out;
}

.mainContent {
  position: relative;
  margin-left: 200px;
  min-height: 100%;
}

@media (max-width: 991px) {
  .mainContent {
    margin-left: 55px;
  }
}

@media (max-width: 767px) {
  .mainContent {
    margin: 0;
  }
}
</style>