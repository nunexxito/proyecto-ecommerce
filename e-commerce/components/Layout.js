import Footer from "./Footer/Index";
import Navbar from "./Navbar/Index";

export default function Layout({children}) {
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
}