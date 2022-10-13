import About from "./components/sections/About";
import RemixIde from "./components/sections/RemixIde";
import Plugins from "./components/sections/Plugins";
import Libraries from "./components/sections/Libraries";
import Rewards from "./components/sections/Rewards";
import Footer from "./components/layout/Footer";
import Events from "./components/sections/Events";
import Team from "./components/sections/Team";
import Navbar from "./components/layout/Navbar";
import {ScrollingProvider} from "./scroll-section";

function App() {
    return (
        <>
            <ScrollingProvider>
                <Navbar/>
                <About/>
                <RemixIde/>
                <Plugins/>
                <Libraries/>
                <Events/>
                <Rewards/>
                <Team/>
                <Footer/>
            </ScrollingProvider>
        </>
    );
}

export default App;
