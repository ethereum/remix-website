import { ScrollingProvider } from "./scroll-section";

import Navbar from "./components/layout/Navbar";
import SubNavbar from "./components/layout/SubNavbar";
import About from "./components/sections/About";
import RemixIde from "./components/sections/RemixIde";
import Plugins from "./components/sections/Plugins";
import Libraries from "./components/sections/Libraries";
import Rewards from "./components/sections/Rewards";
import Footer from "./components/layout/Footer";
import Events from "./components/sections/Events";
import Team from "./components/sections/Team";

import { useColorContinuity } from "./hooks/useColorContinuity";
import { useColorMode } from "./hooks/useColorMode";

function App() {
    const colorState = useColorMode()

    useColorContinuity(colorState.setColorMode)

    return (
        <div className="mx-auto">
            <ScrollingProvider>
                <Navbar colorState={colorState} />
                <SubNavbar />
                <About />
                <RemixIde />
                <Plugins colorMode={colorState.colorMode} />
                <Libraries />
                <Events />
                <Rewards />
                <Team />
                <Footer colorMode={colorState.colorMode} />
            </ScrollingProvider>
        </div>
    );
}

export default App;
