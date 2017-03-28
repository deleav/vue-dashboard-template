<template lang="jade">
  .sidebar
    .menu-button
      i.ml-auto.fa.fa-bars.fa-fw.fa-2x(aria-hidden="true")
    b-list-group.mb-auto.w-100(flush)
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
  position: relative;
  padding: 0;
  margin-left: 0;
  margin-bottom: 0;
  float: left;
  width: 200px;
  height: 100%;
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
    left: 205px;
    top: 10px;
    display: none;
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
    position: fixed;
    margin-left: -145px;
    &:hover {
      margin-left: 0;
    }
  }
}

@media (max-width: 767px) {
  .sidebar {
    margin-left: -200px;
    &:before {
      content: '';
      opacity: 0;
      display: block;
      width: 1px;
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
