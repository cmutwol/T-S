<template>
    <div class="products">
        <div class="row">
            <div class="col-md-3">
                <!--<h4 class="d-flex justify-content-between align-items-center mb-3">-->
                    <!--<span class="text-muted">Brands</span>-->
                <!--</h4>-->
                <div class="form-group">
                    <label>Filter Products</label>
                    <select class="form-control">
                        <option>Brand</option>
                        <option>Category</option>
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

                <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Promo code">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">Redeem</button>
                        </div>
                    </div>
                </form>
             </div>
            <div class="col-md-9">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Available Products</span>
                </h4>
                <div class="row">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5>Product</h5>
                                <p>Some description</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5>Product</h5>
                                <p>Some description</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5>Product</h5>
                                <p>Some description</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    select {
        background-image:
                linear-gradient(45deg, #fb606000 50%, #b6b8ba 60%),
                linear-gradient(135deg, #b6b8ba 40%, transparent 50%) !important;
                /*linear-gradient(45deg, transparent 50%, red 60%),*/
                /*linear-gradient(135deg, red 40%, transparent 50%) !important;*/
        background-position:
                calc(100% - 30px) 14px,
                calc(100% - 20px) 14px,
                100% 0;
        background-size:
                10px 10px,
                10px 10px;
        background-repeat: no-repeat;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
</style>
