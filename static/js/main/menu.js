(() => {
  const $menu = document.getElementById("menu");
  const $menuBtn = document.getElementById("menu-btn");
  const $filePath = getPath("day");

  // RENDER HTML

  function getHTMLForMenu() {
    return `
    <div class="menu">
    <div class="menu__search">
        <ul>
            <li class="header__search header-hidden__delay">
                <a href="${$filePath}search.html">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="m31.474 28.951-6.043-6.025a14.08 14.08 0 0 0 3.004-8.708A14.22 14.22 0 0 0 4.163 4.164a14.215 14.215 0 0 0-3.082 15.495 14.217 14.217 0 0 0 13.136 8.777 14.072 14.072 0 0 0 8.708-3.004l6.025 6.043a1.77 1.77 0 0 0 1.262.526 1.776 1.776 0 0 0 1.261-.526 1.77 1.77 0 0 0 .526-1.261 1.77 1.77 0 0 0-.526-1.262zM3.554 14.218a10.659 10.659 0 0 1 6.583-9.851 10.667 10.667 0 0 1 11.621 2.311 10.66 10.66 0 0 1 2.311 11.621 10.663 10.663 0 0 1-20.514-4.081z" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    <div class="menu__nav">
        <nav>
            <a href="${$filePath}index.html">
                <img src="${$filePath}static/img/Gentse Feesten Logos/GF-logo-2023-${$number}.svg"
                    alt="Gentse Feesten logo">
            </a>
            <div class="menu__nav-list">
                <ul>
                    <li>
                        <a href="${$filePath}news.html">
                            Nieuws
                        </a>
                    </li>
                    <li class="menu__program">
                        <a class="menu__program-item" href="${$filePath}events/day.html?day=14">
                            <p>Programma</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32">
                                <path fill="currentColor"
                                    d="m18.524 0-4.049 4.022 8.784 8.784H0v5.677h23.259l-8.784 8.784 4.049 4.022 15.609-15.645L18.524 0z" />
                            </svg>
                        </a>
                    </li>
                    
                </ul>
                <ul class="menu__days">
                    <li>
                        <a href="${$filePath}events/day.html?day=14">
                            Vrijdag 14 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=15">
                            Zaterdag 15 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=16">
                            Zondag 16 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=17">
                            Maandag 17 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=18">
                            Dinsdag 18 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=19">
                            Woensdag 19 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=20">
                            Donderdag 20 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=21">
                            Vrijdag 21 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=22">
                            Zaterdag 22 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=23">
                            Zondag 23 juli
                        </a>
                    </li>
                    <li>
                        <a href="${$filePath}events/day.html?day=14">
                            Programma
                        </a>
                    </li>
                </ul>
        </nav>
 
<a class="menu__close" id="close" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 32">
        <path fill="currentColor"
            d="m53.378 29.173-23.79-13.215 23.64-13.131L51.658 0 26.259 14.108 1.722.478.152 3.305l22.777 12.652L.001 28.693l1.57 2.827 24.688-13.713 25.55 14.192z" />
    </svg>
</a>
</div>
</div>`;
  }

  // BUILD UI

  function buildUI() {
    $menu.innerHTML = getHTMLForMenu();
  }

  // REGISTER LISTENERS

  function registerListeners() {
    $menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      $menu.classList.remove("close");
      document.body.classList.add("overflow-hidden");
      buildUI();

      const $close = document.getElementById("close");
      $close.addEventListener("click", function (e) {
        e.preventDefault();
        $menu.classList.add("close");
        document.body.classList.remove("overflow-hidden");
      });
    });
  }

  // INITIALIZE

  function initialize() {
    registerListeners();
  }

  initialize();
})();
