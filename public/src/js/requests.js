const backendAddress = 'https://ozonback.herokuapp.com';

import SigninModel from "../models/SigninModel";
import HomeModel from "../models/HomeModel";

export default class Request {

  // ------------------------------
  static profile() {
    Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
        .then(({ status, responseText }) => {

            const root = document.getElementById("main-container");
            root.innerHTML = `
        <h1>
          Вы авторизованы!
          <a href="#" class="logout-link">Выйти из профиля</a>
        </h1>
        `;

            const logoutLink = root.getElementsByClassName("logout-link")[0];
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();

                logOutRequest();

                const root = document.getElementById("main-container");
                const homeModel = new HomeModel(root);
                homeModel.render();

                // homePageRequest();
            })

        })
        .catch(({ status, responseText }) => {

            const root = document.getElementById("main-container");
            const signinModel = new SigninModel(root);
            signinModel.render();

        })
}

}