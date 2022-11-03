import React, {

    createRef, useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { debounce } from './utils';
import { Provider } from './context';
import smoothscroll from 'smoothscroll-polyfill';


const REFS = {};
const META = {};

if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
}

export const ScrollingProvider = ({
                                      debounceDelay = 50,
                                      scrollBehavior = 'smooth',
                                      offset = 0,
                                      children,
                                  }) => {
    const [selected, setSelected] = useState('');
    const handleScroll = useCallback(() => {
        const selectedSection = Object.keys(REFS).reduce(
            (acc, id) => {
                const sectionRef = REFS[id] && REFS[id].current;
                if (!sectionRef) {
                    return {
                        id: id,
                        differenceFromTop: 0,
                    };
                }

                const { top } = sectionRef.getBoundingClientRect();
                const differenceFromTop = Math.abs(top);

                if (differenceFromTop >= acc.differenceFromTop) return acc;

                return {
                    differenceFromTop,
                    id,
                };
            },
            {
                differenceFromTop: 9999,
                id: '',
            },
        );

        if (selected !== selectedSection.id) setSelected(selectedSection.id);
    },[selected]);

    const debounceScroll = debounce(handleScroll, debounceDelay);

    useEffect(() => {
        document.addEventListener('scroll', debounceScroll, true);
        handleScroll();
        return () => {
            document.removeEventListener('scroll', debounceScroll, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceScroll, handleScroll]);

    const registerRef = ({ id, meta }) => {
        const ref = createRef();
        REFS[id] = ref;
        META[id] = meta;
        return ref;
    };

    const scrollTo = useCallback((section) => {
        const sectionRef = REFS[section] && REFS[section].current;

        if (!sectionRef) return console.warn('Section ID not recognized!'); // eslint-disable-line

        setSelected(section);
        window.scrollTo({
            top: sectionRef.offsetTop + offset,
            behavior: scrollBehavior,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const value = useMemo(
        () => ({
            registerRef,
            scrollTo,
            refs: REFS,
            meta: META,
            selected,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selected],
    );

    return <Provider value={value}>{children}</Provider>;
};
