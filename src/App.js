import { useState } from 'react';
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

import { useColorContinuity } from "./hooks/useColorContinuity";
import { useColorMode } from "./hooks/useColorMode";
import { QueryParams } from './utils/query-params'
import { DEFAULT_LOCALE, LOCALES } from './constants'

function App() {
    const queryParams = new QueryParams()
    const lang = queryParams.get().lang || DEFAULT_LOCALE
    const initialLocale = LOCALES.find(locale => locale.code === lang)
    const [locale, setLocale] = useState(initialLocale)
    
    const colorState = useColorMode()
    useColorContinuity(colorState.setColorMode)

    return (
        <IntlProvider locale={locale.code} messages={locale.messages}>
            <div class="mx-auto">
                <ScrollingProvider>
                    <Navbar
                        locales={LOCALES}
                        onSelectLocale={(selectedLocale) =>{
                            queryParams.update({lang: selectedLocale.code})
                            setLocale(selectedLocale)
                        }}
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
