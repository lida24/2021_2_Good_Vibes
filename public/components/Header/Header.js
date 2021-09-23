class Header {

    render() {
        const html = `
        <div id="menu-bar" class="fas fa-bars"></div>

      <a href="#" class="logo"><span>O</span>zon2.0</a>

      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#arrival">arrival</a>
        <a href="#packages">featured</a>
        <a href="#services">services</a>
        <a href="#products">products</a>
        <a href="#review">deal</a>
        <a href="#contact">contact</a>
      </nav>

      <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <i class="fas fa-user" id="login-btn"></i>
      </div>

      <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here..." />
        <label for="search-bar" class="fas fa-search"></label>
      </form>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();