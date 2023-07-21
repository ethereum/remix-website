import { useState } from 'react';
import { IntlProvider } from 'react-intl'
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
import enJson from './locales/en'
import zhJson from './locales/zh'
import { QueryParams } from './utils/query-params'

const locales = [
    { code: 'en', name: 'English', localeName: 'English', messages: enJson },
    { code: 'zh', name: 'Chinese Simplified', localeName: '简体中文', messages: zhJson },
]

function App() {
    const queryParams = new QueryParams()
    const lang = queryParams.get().lang || 'en'
    const defaultLocale = locales.find(locale => locale.code === lang)
    const [locale, setLocale] = useState(defaultLocale)
    return (
        <IntlProvider locale={locale.code} messages={locale.messages}>
            <ScrollingProvider>
                <Navbar
                    locales={locales}
                    onSelectLocale={(selectedLocale) =>{
                        queryParams.update({lang: selectedLocale.code})
                        setLocale(selectedLocale)
                    }}
                />
                <About/>
                <RemixIde/>
                <Plugins/>
                <Libraries/>
                <Events/>
                <Rewards/>
                <Team/>
                <Footer/>
            </ScrollingProvider>
        </IntlProvider>
    );
}

export default App;
