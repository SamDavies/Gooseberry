import React, { Fragment } from 'react'
import GlobalReset from './GlobalReset'
import GlobalTypography from './GlobalTypography'

const GlobalStyles: React.FC = () =>
    <Fragment>
        <GlobalReset />
        <GlobalTypography />
    </Fragment>

export default GlobalStyles

export { GlobalReset, GlobalTypography }
