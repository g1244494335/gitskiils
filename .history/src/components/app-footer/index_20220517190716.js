import React, { memo, Fragment } from 'react'
import { FootWrapper, FootLeft, FootRight } from './style'
import { footerlinks } from '../../common/local-data'

const YKAppFooter = memo(() => {
  const showLinks = (item, index) => {
        if (index !== 7) {
            return (
                <Fragment>
                    <a className="item" target="_blank" rel="noopener noreferrer" href={item.link}>{item.title}</a>
                    <span className="line">|</span>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <a className="item" target="_blank" rel="noopener noreferrer" href={item.link}>{item.title}</a>
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
              <span className="sep">网易公司版权所有©1997-2022</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png' target="_blank">浙网文[2021] 1186-054号</a>
            </p>
            <p>
              <a href="https://beian.miit.gov.cn/#/Integrated/index">粤B2-20090191-18&n工业和信息化部备案管理系统网站</a>
              <a className="police-link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
                <span className="police-logo logo"></span>
                <span>浙公网安备 33010902002564号</span>
              </a>
            </p>
                </FootLeft>
                <FootRight>FOOTRIGHT</FootRight>
            </div>
        </FootWrapper>
    )
})

export default YKAppFooter
