<template lang="jade">
  .container-fluid.h-100.mainContent
    slot
</template>

<style lang="scss" scoped>
.mainContent, .sidebar {
  -webkit-transition: width 200ms ease-out;
  -moz-transition: width 200ms ease-out;
  -o-transition: width 200ms ease-out;
  transition: width 200ms ease-out;
}

.mainContent {
  position: relative;
  float: right;
  width: calc( 100% - 200px );
}

@media (max-width: 991px) {
  .mainContent {
    float: none;
    width: 100%;
    margin-left: 55px;
  }
}

@media (max-width: 767px) {
  .mainContent {
    margin: 0;
  }
}
</style>