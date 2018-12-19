<template>
  <div id="app">
    <Cookie/>
    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div class="container">
        <router-link class="navbar-brand mr-5" to="/">
          <img src="~@/assets/logo_txt.png" width="150" height="50" alt="DevShop">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
          <ul class="navbar-nav mr-auto">
            <!--<li class="nav-item active">-->
              <!--<router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>-->
            <!--</li>-->
            <!--<li class="nav-item">-->
              <!--<a class="nav-link" href="#">Features</a>-->
            <!--</li>-->
            <!--<li class="nav-item">-->
              <!--<a class="nav-link" href="#">Pricing</a>-->
            <!--</li>-->

          </ul>
          <ul class="navbar-nav">
            <!--<li class="nav-item dropdown">-->
              <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
                <!--Shop-->
              <!--</a>-->
              <!--<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
                <!--<a class="dropdown-item" href="#">Action</a>-->
                <!--<a class="dropdown-item" href="#">Another action</a>-->
              <!--</div>-->
            <!--</li>-->
            <li class="nav-item">
              <button class="btn btn-default btn-sm nav-btn mr-4">Login</button>
            </li>
            <!--<li class="nav-item">-->
              <!--<a class="btn btn-default btn-sm nav-btn">Register</a>-->
            <!--</li>-->
          </ul>
        </div>
        </div>
      </nav>
    </header>

    <!-- Begin page content -->
    <main role="main" class="container">
      <router-view/>
    </main>

    <footer class="footer">
      <div class="container">
        <span class="text-muted">Copyright @DevPack | 2017 - 2019</span>
      </div>
    </footer>
  </div>
</template>

<script>
  import Cookie from './views/shared/Cookie.vue';
  export default {
      components: {
          Cookie
      }
  }
</script>
<style lang="scss">
  .nav-btn {
    background-color: #FFFFFF;
    fill: rgb(38, 38, 38);
    min-width: 104px;
    border-radius: 2px;
    box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.1);
    border: 1px solid #ecf0f6 !important;
    padding: 8px 16px;
    width: auto;
    transition: all 400ms ease;
    -webkit-transition: all 400ms ease;
    -moz-transition: all 400ms ease;
    font-size: 14px;
    height: 40px;
    cursor: pointer;
    align-items: center;
    -webkit-box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .nav-btn:hover {
    background: #ecf0f6;
    /*border: 1px solid #50a847 !important;*/
    color: #212529;
  }
</style>
