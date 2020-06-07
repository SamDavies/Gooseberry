import React, { Fragment } from 'react'
import GlobalTypography from './GlobalTypography'
import GlobalReset from './GlobalReset'

const GlobalStyles = () =>
    <Fragment>
        <GlobalReset />
        <GlobalTypography />
    </Fragment>

export default GlobalStyles

export { GlobalReset, GlobalTypography }
