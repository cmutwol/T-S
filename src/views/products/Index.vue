<template>
    <div class="products">
        <div class="row">
            <div class="order-md-2 mb-4 col-md-3 side-product">
                <!--<h4 class="d-flex justify-content-between align-items-center mb-3">-->
                <!--<span class="text-muted">Brands</span>-->
                <!--</h4>-->
                <div class="form-group">
                    <label>Filter Products</label>
                    <select class="form-control">
                        <option>Brand</option>
                        <option>Category</option>
                        <option>Price</option>
                    </select>
                </div>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Product name</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Second product</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$8</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Third item</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </ul>
            </div>
            <div class="col-md-9">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Available Products</span>
                </h4>
                <div class="row">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <img src="~@/assets/images/products/mac_pro_bit.jpg" class="img-fluid"/>
                                <h5>Macbook Pro</h5>
                                <p>
                                    <small class="custom-product-details">
                                        HD 320Gb / RAM 16Gb - 2019.
                                    </small>
                                    <br/>
                                    <span>
                                        $ 3000.00
                                    </span>
                                </p>
                                <small><router-link to="/products/1">View Product  <i class="ion ion-ios-arrow-round-forward"></i></router-link></small>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success btn-sm">Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <img src="~@/assets/images/products/mac_air.jpeg" class="img-fluid"/>
                                <h5>Macbook Air</h5>
                                <p>
                                    <small class="custom-product-details">HD 320Gb / RAM 8Gb.</small>
                                    <br/>
                                    <span>
                                        $ 1100.00
                                    </span>
                                </p>

                                <small><router-link to="/">View Product  <i class="ion ion-ios-arrow-round-forward"></i></router-link></small>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success btn-sm">Order</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <img src="~@/assets/images/products/iphone_x.jpg" class="img-fluid"/>
                                <h5>Iphone X</h5>
                                <p>
                                    <small class="custom-product-details">Storage 128Gb/ RAM 8Gb.</small>
                                    <br/>
                                    <span>
                                        $ 987.00
                                    </span>
                                </p>
                                <small><router-link to="/">View Product  <i class="ion ion-ios-arrow-round-forward"></i></router-link></small>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success btn-sm">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>
