import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpin = () => (
    <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
    />
)

export default LoaderSpin;
