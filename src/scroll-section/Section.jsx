import React, { useMemo, useContext } from 'react';
import { ScrollContext } from './context';


export const Section = ({ id, children, meta, ...rest }) => {
    const { registerRef } = useContext(ScrollContext);
    const ref = useMemo(() => registerRef({ id, meta }), [id]);

    return (
        <section {...rest} ref={ref} id={id}>
            {children}
        </section>
    );
};
