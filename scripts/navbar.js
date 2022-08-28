function nav(){
    return `
    <div id="navbar">
        <!-- for left sides of navbar -->
        <div id="leftPage">
            <!-- div for big screen -->
            <div>
                <p onclick="productPage()">menswear</p>
                <p onclick="productPage()">womenswear</p>
                <p onclick="productPage()">everything else</p>
                <p onclick="productPage()">sale</p>
                <p>search</p>
            </div>
            <!-- div for small and medium screen -->
            <div id="allProduct">
                <div class="dropdown">
                    <button class="dropbtn">MENU
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <span onclick="productPage()" id="mens" class="menswear">MENSWEAR</span>
                        <span onclick="productPage()" id="womens">WOMENSWEAR</span>
                        <span onclick="productPage()" id="else">EVERYTHING ELSE</span>
                        <span id="wish">WISHLIST</span>
                        <span id="search">SEARCH</span>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <!-- for logo of navbar -->
        <div>
           <img id="brandLogo" onclick="home()"
                src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="Error">
        </div>
        <div></div>
        <!-- for right sides of navbar -->
        <div id="rightPage">
            <!-- div for big screen -->
            <div>
                <p>english</p>
                <p class="Account">Login</p>
                <p><a href="">whishlist</a></p>
                <p><a href="">shopping bag <span id="countShow">(0)</span></a></p>
            </div>
            <!-- div for small and medium screen -->
            <div id="cartLogo">
                <img id="accountLogo" src="https://www.svgrepo.com/show/178258/user-social.svg" alt="Error">
                <img id="shoppingLogo"
                    src="data:image/png;base64,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"
                    alt="Image">
            </div>
        </div>
    </div>`
}
export default nav;