import React, { memo, Fragment } from 'react'
import { FootWrapper, FootLeft, FootRight } from './style'
import { footerlinks } from '../../common/local-data'

const YKAppFooter = memo(() => {
  const showLinks = (item, index) => {
        if (index !== 7) {
            return (
                <Fragment>
                    <a className="item" pref={item.link}>{item.title}</a>
                    <span className="line">|</span>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <a className="item" pref={item.link}>{item.title}</a>
                </Fragment>
            )
        }
    }

    return (
        <FootWrapper>
            <div className="content w980">
                <FootLeft>
                    <p>
                        {footerlinks.map((item, index) => {
                            return showLinks(item, index)
                        })}
            </p>
            <p>
              <span>网易公司版权所有©1997-2022</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a>浙网文[2021] 1186-054号</a>
            </p>
                </FootLeft>
                <FootRight>FOOTRIGHT</FootRight>
            </div>
        </FootWrapper>
    )
})

export default YKAppFooter
