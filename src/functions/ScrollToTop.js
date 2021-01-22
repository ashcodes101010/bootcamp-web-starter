// Source: https://stackoverflow.com/questions/64922153/props-history-push-does-not-go-to-top-of-page-need-functional-component

import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0)
        })
        return () => {
            unlisten()
        }
    }, [history])

    return null
}

export default withRouter(ScrollToTop);