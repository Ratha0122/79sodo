var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function url() {
    location.href = "https://www.hay88.one/?inviteCode=6201753"
}



    document.getElementsByClassName('header')[0].innerHTML = `
    <div class=" from-zinc-800 to-gray-900 bg-gradient-to-t">
        <header class="max-w-6xl mx-auto p-2 flex justify-between items-center ">
            <div onclick="OpenMenu()" class="icon  md:hidden text-3xl text-white">
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <a href="./index.html" class="logo flex justify-center  ">
                <img src="./images/logo-79sodo.png" alt="logo" class="w-[200px]">
            </a>
            <div
                class="btn hidden md:flex  items-center justify-center gap-4 text-white *:bg-[#B20000] *:px-4 *:py-2 *:rounded-full font-bold  ">
                <button onclick=url() class="hover:ring hover:ring-[#6d0404] ease-in-out duration-700"> ĐĂNG NHẬP
                </button>
                <button onclick=url() class="hover:ring hover:ring-[#6d0404] ease-in-out duration-700"> ĐĂNG KÝ
                </button>
            </div>
            <span class="md:hidden"></span>
        </header>
        <nav class=" from-[#8b1212] to-[#060606] bg-gradient-to-tl py-2">
            <div
                class="btn md:hidden p-1 flex  items-center justify-center gap-4 text-white *:bg-[#B20000] *:px-4 *:py-1  *:rounded-full font-bold  ">
                <button onclick=url() class="hover:ring hover:ring-[#6d0404] ease-in-out duration-700"> ĐĂNG NHẬP
                </button>
                <button onclick=url() class="hover:ring hover:ring-[#6d0404] ease-in-out duration-700"> ĐĂNG KÝ
                </button>
            </div>
            <div id="nav"
                class="absolute z-10 hidden md:block top-0 h-screen md:h-auto md:w-auto w-full md:relative bg-[#554e5f] md:bg-transparent ease-in-out duration-700">
                <ul class="*:list-none text-white md:flex flex-wrap justify-center items-center *:rounded-lg font-bold *:py-4 relative md:top-0 top-7 *:border-b-[1px] *:border-[#c71212] gap-2">
                    <li class=" active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./index.html">TRANG CHỦ</a>
                    </li>
                    <li class="active:bg-[#8b1212]  focus:bg-[#cf1212] py-2 px-4"><a href="./live-casino.html">LIVE CASINO</a>
                    </li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./the-thao.html">THỂ THAO</a>
                    </li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./pk3.html">PK3</a></li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./tai-xiu.html">TÀI XỈU</a></li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./slot.html">SLOT</a></li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./dan-gian.html">DÂN GIAN</a>
                    </li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./khuyen-mai.html">KHUYẾN MÃI</a>
                    </li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./xo-so.html"> XỔ SỐ</a></li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./huong-dan.html">HƯỚNG DẪN</a>
                    </li>
                    <li class="active:bg-[#8b1212] focus:bg-[#cf1212] py-2 px-4"><a href="./tin-tuc.html">TIN TỨC</a></li>

                </ul>
                <div onclick="CloseMenu()" class="closeMenu md:hidden absolute top-2 right-0 text-3xl text-white ">
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
        </nav>
    </div>
`




    document.getElementsByClassName('footer')[0].innerHTML = `
    <footer class="from-[#2a0b42] to-[#801414] bg-gradient-to-l px-4 py-10">
        <div class="max-w-6xl mx-auto">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div class="space-y-4">
                    <img src="./images/logo-79sodo.png" alt="">
                    <p>79Sodo là nhà cái cá cược hàng đầu Châu Á. Áp dụng công nghệ cao hiện đại mang đến những ứng dụng
                        giải trí trực tuyến Xổ số, Thể thao, Game bài,… hàng đầu với tỷ lệ ăn cao nhất thị trường hiện
                        nay!</p>
                </div>

                <div>
                    <h1 class="border-b p-2 font-bold text-[#FFFF00]">HƯỚNG DẪN</h1>
                    <ul class="*:list-none space-y-3 mt-6">
                        <li><a href="./huong-dan-nap-tien.html"><span class="text-amber-500 text-2xl">></span>
                                Hướng Dẫn Nạp Tiền</a>
                        </li>
                        <li><a href="huong-dan-rui-tien.html"><span class="text-amber-500 text-2xl">></span>
                                Hướng Dẫn Rút Tiền</a>
                        </li>
                        <li><a href="huong-dan-dang-ky.html"><span class="text-amber-500 text-2xl">></span>
                                Hướng Dẫn Đăng Ký</a>
                        </li>
                        <li><a href="huong-dan-tai-app.html"><span class="text-amber-500 text-2xl">></span>
                                Hướng Dẫn Tải APP</a>
                        </li>
                        <li><a href="huong-dan-dang-kydai-ly.html"><span class="text-amber-500 text-2xl">></span>
                                Hướng Dẫn Đăng Ký Đại Lý</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 class="border-b p-2 font-bold text-[#FFFF00]">SƠ ĐỒ TRANG WEB</h1>
                    <ul class="*:list-none space-y-3 mt-6">
                        <li><a href="./ve-chung-toi.html"><span class="text-amber-500 text-2xl">></span>
                                Về Chúng Tôi</a>
                        </li>
                        <li><a href="./quyen-rieng-tu.html"><span class="text-amber-500 text-2xl">></span>
                                Quyền Riêng Tư</a>
                        </li>
                        <li><a href="./chinh-sach-bao-mat.html"><span class="text-amber-500 text-2xl">></span>
                                Chính Sách Bảo Mật</a>
                        </li>
                        <li><a href="./dieu-khoan-su-dung.html"><span class="text-amber-500 text-2xl">></span>
                                Điều Khoản Sử dụng</a>
                        </li>
                        <li><a href="./mien-tru-trach-nhiem.html"><span class="text-amber-500 text-2xl">></span>
                                Miễn Trừ Trách Nhiệm</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img class="p-2 mt-10" src="./images/logo-partner.webp" alt="">
        </div>

    </footer>
`


    document.getElementsByClassName('right-content')[0].innerHTML = `
                    <h1 class="font-bold">BÀI VIẾT MỚI</h1>
                    <hr class="mt-2 border-solid w-8 border-[2px] rounded-2xl border-gray-400">
                    <a href="./lo-truot-la-gi.html" class="flex gap-4 mt-4">
                        <div>
                            <img src="/images/bai-viet-moi-1.webp" alt="" class="w-16 ">
                        </div>
                        <div class="">
                            <p>Lô trượt là gì? Thông tin chi tiết từ A – Z 2024</p>
                        </div>
                    </a>
                    <a href="xo-so-sieu.html" class="flex gap-4 mt-4">
                        <div>
                            <img src="/images/bai-viet-moi-2.webp" alt="" class="w-16 ">
                        </div>
                        <div class="">
                            <p>Xổ số siêu tốc là gì? 3 hình thức phổ biến 2024</p>
                        </div>
                    </a>
                    <a href="tai-xiu-la-gi.html" class="flex gap-4 mt-4">
                        <div>
                            <img src="/images/bai-viet-moi-3.webp" alt="" class="w-16 ">
                        </div>
                        <div class="">
                            <p>Tìm hiểu tài xỉu là gì? Cách chơi tài xỉu đúng nhất</p>
                        </div>
                    </a>
                    <a href="tim-hieu-chi.html" class="flex gap-4 mt-4">
                        <div>
                            <img src="/images/bai-viet-moi-4.webp" alt="" class="w-16 ">
                        </div>
                        <div class="">
                            <p>Tìm Hiểu Chi Tiết Các Thế Bài Baccarat Phổ Biến Nhất Hiện Nay</p>
                        </div>
                    </a>

`


    const navbar = document.getElementById('nav');
    function OpenMenu() {
        navbar.classList.toggle('hidden')
        if (!navbar.classList.contains('hidden')) {
            navbar.scrollIntoView({ behavior: 'smooth' })
        }
    }

    function CloseMenu() {
        navbar.classList.toggle('hidden')
        if (!navbar.classList.contains('hidden')) {
            navbar.scrollIntoView({ behavior: 'smooth' })
        }
    }
