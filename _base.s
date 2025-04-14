$color-body: #ffffff;
$color-black: #000000;
$color-gry: #888888;
$color-footer: #F3F3F3;
$color-navyblue: #2D313C;
$color-green: #29933A;
$font-alibaba: alibaba-bold;
$font-alibaba: alibaba-black;
$font-alibaba: alibaba-regular;
@font-face {
    font-family: alibaba-bold;
    src: url(/Fonts/alibaba-bold.woff2);
}

@font-face {
    font-family: alibaba-black;
    src: url(/Fonts/alibaba-black.woff2);
}

@font-face {
    font-family: alibaba-regular;
    src: url(/Fonts/alibaba-regular.woff2);
}

@mixin flexLayout {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin position($bottom-value) {
    position: relative;
    bottom: $bottom-value;
}

@mixin textStyle ($font-size) {
    font-family: alibaba-regular;
    font-size: $font-size;
    font-weight: 100;
}

%fullsSpace {
    width: 100%;
    height: 100%;
}

@mixin backgrounds {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: $color-body;
    direction: rtl;
    height: 100%;
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-ul ul {
    display: none;
}

.header-ul li:hover ul {
    display: block;
}

.hide {
    display: none;
}
