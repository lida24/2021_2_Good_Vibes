class Home {

    render() {
        const html = `
        <div class="content">
        <h3>Latest Gadgets</h3>
        <p>discover new places with us, adventures awaits</p>
        <a href="#" class="btn">buy now</a>
      </div>

      <div class="controls">
        <span class="vid-btn active" data-src="images/vid-1.mp4"></span>
        <span class="vid-btn" data-src="images/vid-2.mp4"></span>
        <span class="vid-btn" data-src="images/vid-3.mp4"></span>
        <span class="vid-btn" data-src="images/vid-4.mp4"></span>
        <span class="vid-btn" data-src="images/vid-5.mp4"></span>
      </div>

      <div class="video-container">
        <video
          src="images/vid-1.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
      </div>
        `;
        ROOT_HOME.innerHTML = html;
    }
}

const homePage = new Home();
homePage.render();