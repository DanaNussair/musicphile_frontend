import Logo from "./assets/images/Logo.svg";
import { ButtonGroup, Button } from "react-bootstrap";
import Loader from "./components/AnimatedSVGs/Loader";
import Boombox from "./components/AnimatedSVGs/Boombox";

function App() {
  return (
    <div>
      <div className="background pb-3">
        <div className="container">
          <div className="row pt-4">
            <div className="col-2 float-left">
              <img src={Logo} alt="bg" width="120px" />
            </div>
            <div className="col-10 d-flex flex-row-reverse align-items-center">
              <ButtonGroup toggle>
                <Button className="banner-button">Home</Button>
                <Button className="banner-button">Listen</Button>
                <Button className="banner-button">About</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pb-3 d-flex align-items-end">
            <div className="col">
              <div
                style={{ fontSize: "30pt", fontWeight: "bold", color: "white" }}
              >
                Music For The Masses
              </div>
              <div style={{ fontSize: "15pt", color: "white" }}>
                Listen to all your favorite music nonstop
              </div>
              <div>
                <Button className="mt-3 go-to-lib">Go to library</Button>
              </div>
            </div>
            <div className="col d-flex flex-row-reverse">
              <Boombox />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Loader />
          </div>
        </div>
      </div>
      <div className="m-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          est lacus. Nam ac felis et ante feugiat tincidunt quis ut odio. Etiam
          laoreet, diam sit amet tristique tempor, felis dui rhoncus sapien, a
          lobortis neque sapien eu erat. Nunc leo risus, dapibus sit amet nisi
          eget, viverra ultrices lorem. Vivamus vitae diam ante. Cras a rhoncus
          orci. Donec in iaculis sapien, sed commodo urna. Nam vel tristique
          tellus. Nullam leo sem, ornare eu augue at, sollicitudin ornare
          mauris. Fusce purus ante, aliquet sed auctor vel, sodales quis nibh.
          Phasellus semper neque tristique rutrum viverra. Quisque ultricies
          lacus in neque faucibus, ac pulvinar ligula vestibulum. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Nam efficitur felis lectus, eu sollicitudin nisi
          pharetra eleifend. Sed vestibulum, ipsum lacinia dapibus semper, ex
          odio volutpat turpis, non rhoncus augue enim eu erat. Aliquam luctus
          tincidunt lacus ut vestibulum. Fusce tempor nulla arcu, et sodales
          nibh feugiat ac. Ut ornare non nunc in gravida. In hac habitasse
          platea dictumst. Donec tempus lacus lorem, laoreet volutpat sem
          consequat nec. Sed in urna tellus. Quisque non metus quis mauris
          ultrices dictum. Curabitur vitae leo ac nibh egestas aliquet. Donec
          ultricies dapibus est at tincidunt. Nullam tincidunt vitae nulla at
          venenatis. Vivamus volutpat eros sed aliquet scelerisque. Donec in
          congue diam, ut finibus dui. Nunc vel risus vestibulum sem tincidunt
          posuere ut ut sem. Sed non massa molestie, viverra quam ut, ultricies
          risus. Nunc commodo, felis id cursus dignissim, velit ante sodales
          metus, id porttitor augue mauris vel dolor. Suspendisse porttitor,
          magna vel imperdiet faucibus, lacus dolor malesuada nulla, vel
          efficitur purus augue eget turpis. Aenean in arcu quam. Donec
          convallis enim vel lobortis mollis. Phasellus maximus eget ligula
          semper malesuada. Suspendisse et odio sodales, lacinia diam ac, varius
          lacus. Aenean ut maximus leo, quis fermentum ipsum. Cras semper
          dignissim eros nec auctor. Nam ultricies nisi auctor urna feugiat,
          feugiat gravida ex dapibus. Pellentesque finibus efficitur orci, sed
          iaculis sapien mattis in. Ut pellentesque egestas sapien, quis euismod
          ante vestibulum sed. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec semper euismod massa,
          quis lacinia velit lacinia at. Curabitur dapibus justo vitae mauris
          vehicula, quis vehicula erat condimentum. Vivamus quis turpis
          consequat ante vehicula porta interdum vitae nunc. Pellentesque
          dignissim fermentum erat ac fringilla. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Fusce ut urna
          a nunc cursus venenatis. Fusce accumsan fermentum odio, eu bibendum
          sapien molestie cursus. Ut sed quam nulla. Curabitur vulputate luctus
          nisl. Sed bibendum tempor pharetra. Morbi posuere suscipit nisi vel
          auctor. Nam suscipit lectus massa, id efficitur augue faucibus sit
          amet. Phasellus id posuere urna. Quisque felis nunc, ultrices at porta
          et, tincidunt et odio. Proin maximus metus eu eros iaculis, vitae
          euismod risus dignissim.
        </p>
      </div>
    </div>
  );
}

export default App;
