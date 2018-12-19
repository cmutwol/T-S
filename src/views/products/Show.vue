<template>
    <div class="products">
        <div class="row">
            <div class="order-md-2 mb-4 col-md-3 side-product">
                <div class="sticky-top">
                <div class="form-group">
                    <h5 class="mb-3">Customize Your Own</h5>
                </div>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="form-group">
                            <label>
                                <h6 class="my-0">RAM</h6>
                            </label>
                            <div class="mb-2">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ddr3" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label text-success" for="ddr3">DDR3</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ddr4" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label text-success" for="ddr4">DDR4</label>
                                </div>
                            </div>
                            <!--<select class="form-control form-control-sm">-->

                            <!--</select>-->
                            <div class="col-auto my-1">
                                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option>2 GB</option>
                                    <option>4 GB</option>
                                    <option>8 GB</option>
                                    <option>16 GB</option>
                                    <option>32 GB</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="form-group">
                            <label>
                                <h6 class="my-0">Hard Disk</h6>
                            </label>
                            <div class="mb-2">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="ssd" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label text-success" for="ssd">SSD</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="hdd" name="customRadioInline1" class="custom-control-input">
                                    <label class="custom-control-label text-success" for="hdd">HDD</label>
                                </div>
                            </div>
                            <div class="col-auto my-1">
                                <select class="custom-select mr-sm-2">
                                    <option>64 GB</option>
                                    <option>128 GB</option>
                                    <option>256 GB</option>
                                    <option>500 GB</option>
                                    <option>1000 GB</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="form-group">
                            <label>
                                <h6 class="my-0">Screen Size</h6>
                            </label>
                            <div class="col-auto my-1">
                                <select class="custom-select mr-sm-2">
                                    <option>13 Inch</option>
                                    <option>15 Inch</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="form-group">
                            <label>
                                <h6 class="my-0">Screen Resolution</h6>
                            </label>
                            <div class="col-auto my-1">
                                <select class="custom-select mr-sm-2">
                                    <option v-for="screen in screens">{{ screen.resolution}}</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div class="form-group">
                            <label>
                                <h6 class="my-0">Available Colors</h6>
                            </label>
                            <div class="col-auto my-1">
                                <select class="custom-select mr-sm-2">
                                    <option>Gray</option>
                                    <option>Silver</option>
                                    <option>Black</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (KSh)</span>
                        <strong>200,000</strong>
                    </li>
                </ul>
            </div>
            </div>
            <div class="col-md-9">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted"></span>
                </h4>
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="sticky-top">
                        <div class="card">
                            <div class="card-body">
                                <div class="product-payment-details">
                                    <h4 class="product-title mb-2">
                                        Macbook Pro HD 256GB / RAM 16GB - 2019 Model
                                    </h4>
                                    <p class="text-success"><i class="fa fa-credit-card"></i> 12x or  5x $ 5.00</p>
                                    <p class="mb-0"><i class="fa fa-truck"></i> Delivery in all territory</p>
                                    <div class="text-muted mb-2"><small>know more about delivery time and shipping forms</small></div>
                                    <label for="quant">Quantity</label>
                                    <input type="number" name="quantity" min="1" id="quant" class="form-control mb-3 form-control-sm" placeholder="Choose the quantity">
                                  </div>
                              </div>
                            <div class="card-footer">
                                <button class="btn btn-success btn-sm">Order Now</button>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <img src="~@/assets/images/products/mac_pro_lg.jpg" class="img-fluid"/>
                                 <h5 class="mb-3">Macbook Pro HD 256GB / RAM 16GB - 2019 Model</h5>
                                    <h6><strong>Specifications </strong></h6>
                                    <small class="custom-product-details mb-3">
                                    <ul>
                                        <li>Display Size: 15.4" Retina display</li>
                                        <li>CPU: 2.5GHz quad-core Intel Core i7 processor</li>
                                        <li>OS:OS X Yosemite</li>
                                        <li>Memory: 16GB RAM</li>
                                        <li> Storage: 256GB Flash Storage</li>
                                    </ul>
                                    </small>
                                    <br/>

                                <small>
                                <h6><strong>Description</strong></h6>
                                    <p>
                                        The new display in the MacBook Pro is the best ever in a Mac notebook. It features brighter LED backlighting and an increased
                                        contrast ratio, delivering deeper blacks and brighter whites. Its larger pixel aperture and variable refresh rate make it more
                                        power efficient than previous generations. And it’s the first Mac notebook to support wide color, for even more vibrant greens
                                        and reds.This ensures truer-to-life pictures with realistically vivid details, essential for graphic design, color grading,
                                        and editing.
                                        You should defenitely order one!
                                    </p>
                                    <router-link to="#">
                                         Fewer Product Details  <i class="ion ion-ios-arrow-up"></i>
                                    </router-link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                screens: [
                    {id: 1, resolution: '1366 x 768 HD', price: 0},
                    {id: 2, resolution: '1600 x 900 HD+', price: 2},
                    {id: 3, resolution: '1920 x 1080 Full HD', price: 3 },
                    {id: 4, resolution: '2560 x 1440 QHD/WQHD', price: 4},
                    {id: 5, resolution: '3000 x 2000 PixelSense', price: 5},
                    {id: 6, resolution: '3200 x 1800 QHD+ 3K ', price: 6,},
                    {id: 7, resolution: '3840 x 2160 UHD. 4K ', price: 7}
                ]
            }
        }
    }
</script>
<style lang="scss">
    .custom-select {
        width: 220px !important;
        margin-left: -15px !important;
    }
    .form-group {
        width: 220px !important;
        font-size: 0.8em !important;
        margin-bottom: -2px !important;
    }
</style>
