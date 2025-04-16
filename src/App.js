import { IntlProvider } from 'react-intl'
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
import Dashboard from "./components/sections/Dashboard";

import { useColorContinuity } from "./hooks/useColorContinuity";
import { useColorMode } from "./hooks/useColorMode";
import { LOCALES } from './constants'
import { useIntl } from './hooks/useIntl';

import dashboards from './assets/dashboard'

function App() {
    const intlState = useIntl()
    const { code, messages } = intlState.locale

    const colorState = useColorMode()
    useColorContinuity(colorState.setColorMode)

    for (const d in dashboards) {
        if (window.location.search.indexOf(d) !== -1) {
            const dashboard = dashboards[d]
            if (dashboard) {
                return (
                    <IntlProvider locale={code} messages={messages}>
                    <div className="mx-auto">
                        <ScrollingProvider>
                            <Navbar
                                intlState={intlState}
                                locales={LOCALES}
                                colorState={colorState}
                            />
                            <Dashboard data={dashboard} network={d} />
                            <Footer colorMode={colorState.colorMode} />
                        </ScrollingProvider>
                    </div>
                </IntlProvider>
                )
            }
        }
    }
    

    return (
        <IntlProvider locale={code} messages={messages}>
            <div className="mx-auto">
                <ScrollingProvider>
                    <Navbar
                        intlState={intlState}
                        locales={LOCALES}
                        colorState={colorState}
                    />
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
        </IntlProvider>
    )
}

export default App;