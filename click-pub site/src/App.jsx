import "./App.css";

function App() {
  return (
    <>
      <header>
        <h2>Click -up restaraunt </h2>
        <div class="logo">
          <nav>
            <ul>
              <li>
                <a href="" id="icon">
                  {" "}
                  Features{" "}
                </a>
              </li>
              <li>
                <a href="">Company</a>
                <ul>
                  <li>
                    <a href="">History</a>
                  </li>
                  <li>
                    <a href="">Our Team</a>
                  </li>
                  <li>
                    <a href="">Company</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="reg">
          <button>Login</button>
          <button id="register">Register</button>
        </div>
      </header>

      <div className="body ">
        <div className="clientimage">
          <img src="../src/assets/pub image.jpg" />
        </div>
        <div>
          <h2 id="food ">food delivery and juice </h2>

          {/* <input type="text " placeholder="enter your address " /> */}
          <label htmlFor="address">choose your address</label>
          <select name="areas" id="address">
            <option value="area">subukia town</option>
            <option value="area">wasenges</option>
            <option value="area">Kebazi</option>
            <option value="area">Ngorika</option>
            <option value="area">Solai</option>
            <option value="area">dundori</option>
            <option value="area">bahati</option>
            <option value="area">Menengai Crater</option>

          </select>
        </div>
      </div>
      <div>
        {" "}
        <div className="foods">
          <h2>Food on click restaraunt </h2>
          <div className="products">
            <div className="product">
              <img src="../src/assets/meatchips.jpg" alt="" />
              <p> meat chips</p>
              <p>price KSH 500</p>
              <button>Buy Now </button>
            </div>
            <div className="product">
              <img src="../src/assets/crips.jpg" alt="" />
              <p> crips</p>
              <p>price KSH 900</p>
              <button>Buy Now </button>
            </div>{" "}
            <div className="product">
              <img src="../src/assets/chipsandmeat.jpg" alt="" />
              <p> chips meat</p>
              <p>price KSH 1000</p>
              <button>Buy Now </button>
            </div>{" "}
            <div className="product">
              <img src="../src/assets/download .jpg" alt="" />
              <p> mukimo </p>
              <p>price KSH 700</p>
              <button>Buy Now </button>
            </div>{" "}
            <div className="product">
              <img src="../src/assets/meatchips.jpg" alt="" />
              <p> meat chips</p>
              <p>price KSH 500</p>
              <button>Buy Now </button>
            </div>
          </div>
        </div>
      </div>
      <div className="areas ">
        <h2> Area we deliver </h2>
        <ul>
          <li>subukia town </li>
          <li> waseges </li>
          <li> kebazi </li>
          <li>Ngorika</li>
          <li>Solai</li>
          <li>Dundori</li>
          <li>bahati</li>
          <li>Menengai Crater</li>
        </ul>
      </div>
      <div className="about">
        <h2> About</h2>
      </div>
    </>
  );
}

export default App;
