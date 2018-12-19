<template>
  <div class="home">
    <div class="row">
        <div class="col-md-4">
          <h6 class="mt-5">Get all your tech stuff here </h6>
          <button class="btn btn-success mt-2 btn-sm">Get Started <i class="ion ion-ios-arrow-round-forward"></i></button>
        </div>
      <div class="col-md-8">
        <section class="divided clearfix text-center">
            <div class="row py-5">
              <div class="col col-12 col-sm-12 col-md-6 p-lg-5">
                <div class="p-5">
                  <h1 class="h1">Sell </h1>
                  <h5 class="h5 text-muted mb-5" >Want to Seller </h5>
                  <p>Follow Our simple procedure to get started</p>
                </div>
              </div>
              <div class="versus">OR</div>
              <div class="col col-12 col-sm-12 col-md-6 p-lg-5">
                <div class="p-5">
                  <h1 class="h1">Order </h1>
                  <h5 class="h5 text-muted mb-5">Order</h5>
                  <p>We've variety of options to choose, we know exactly what you need </p>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
<style lang="scss">
   p {
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
  }
   .versus{
     position: absolute;
     background: #f7f8f9;
     border-radius: 100%;
     border: 1px solid #50a847;
     color: #50a847;
     font-size: 1.25em;
     height: 78px;
     left: 50%;
     margin-left: -39px;
     padding-top: 22px;
     text-align: center;
     top: 50%;
     transform: translateY(-50%);
     width: 78px;
     z-index: 4;
   }
</style>
