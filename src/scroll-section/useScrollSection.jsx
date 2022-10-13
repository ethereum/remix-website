import {useContext} from 'react';
import {ScrollContext} from './context';

export const useScrollSection = (id) => {
    const { scrollTo, selected: selectedSection } = useContext(ScrollContext);
    const onClick = () => scrollTo(id);
    const selected = selectedSection === id;
    return { onClick, selected };
};

export const useScrollSections = () => {
    const { scrollTo, selected: selectedSection, refs, meta } = useContext(
        ScrollContext,
    );

    return Object.keys(refs).map((id) => ({
        id,
        meta: meta[id],
        onClick: () => scrollTo(id),
        selected: selectedSection === id,
    }));
};
