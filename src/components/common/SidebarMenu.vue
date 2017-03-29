<template lang="jade">
  .sidebar
    .menu-button
      i.ml-auto.fa.fa-bars.fa-fw.fa-2x(aria-hidden="true")
    #head-icon.mx-auto.my-4
    b-list-group.w-100(flush)
      b-list-group-item(to="/dashboard") Home
        i.ml-auto.fa.fa-home.fa-fw.fa-2x(aria-hidden="true")
      b-list-group-item(to="/project") Project
        i.ml-auto.fa.fa-folder.fa-fw.fa-2x(aria-hidden="true")
</template>

<style lang="scss" scoped>
nav.sidebar {
  -webkit-transition: margin 200ms ease-out;
  -moz-transition: margin 200ms ease-out;
  -o-transition: margin 200ms ease-out;
  transition: margin 200ms ease-out;
}

.sidebar {
  position: fixed;
  padding: 0;
  min-height: 100%;
  width: 200px;
  background: #0275D8;
  & .list-group-item {
    color: #fff;
    background-color: #0275d8;
    border-color: #0275d8;
    padding: 12px 10px 12px 20px;
  }
  & .list-group-item.active {
    background: #FFFFFF;
    border: #FFFFFF;
    color: #2c3e50;
  }

  .menu-button {
    position: absolute;
    left: 200px;
    padding: 10px;
    display: none;
  }

  #head-icon {
    background: #5CC9F5;
    height: 75px;
    width: 75px;
    border-radius: 50%;
  }
}

.sidebar {
  -webkit-transition: margin 200ms ease-out;
  -moz-transition: margin 200ms ease-out;
  -o-transition: margin 200ms ease-out;
  transition: margin 200ms ease-out;
}

@media (max-width: 991px) {
  .sidebar {
    z-index: 999;
    margin-left: -145px;
    &:hover {
      margin-left: 0;
    }
  }
}

@media (max-width: 767px) {
  .sidebar {
    margin-left: -200px;
    &::before {
      content: '';
      opacity: 0;
      display: block;
      width: 8px;
      height: 100%;
      position: absolute;
      left: 200px;
    }
    .menu-button {
      cursor: pointer;
      display: block;
    }
  }
}
</style>
