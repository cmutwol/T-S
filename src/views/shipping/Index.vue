<template>
    <div class="shipping">
        <div class="row">
            <div class="col-md-3">
                <p>some description</p>
            </div>
            <div class="col-md-9">
                <h5>Track Your Order</h5>
                <ul class="timeline">
                    <li>
                        <a target="_blank" href="/">Order</a>
                        <a href="#" class="float-right">21 March, 2019</a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi
                            semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula
                            in sodales vehicula....
                        </p>
                    </li>
                    <li>
                        <a href="#">Payments</a>
                        <a href="#" class="float-right">4 March, 2019</a>
                        <p>
                            Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis
                            vitae justo accumsan, sed semper nisi sollicitudin...
                        </p>
                    </li>
                    <li>
                        <a href="#">Shipping </a>
                        <a href="#" class="float-right">1 April, 2019</a>
                        <p>
                            Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc
                            vitae, mollis pharetra velit. Sed nec tempor nibh...
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }
</style>
