import React, { useRef, useEffect } from 'react';
import { mount } from 'app1/App1';
import { useHistory } from 'react-router-dom';

export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		// It's going to create an instance of out app 1 and render it into that div
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
			}
		});
		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref}/>;
};
