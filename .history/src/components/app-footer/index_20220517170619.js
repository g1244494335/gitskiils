import React, { memo } from 'react'
import { FootWrapper, FootLeft, FootRight } from "./style"
import { footerlinks } from '../../common/local-data'

const YKAppFooter = memo(() => {

  const showLinks = (item, index) => {
    if (index !== 7) {
      return (
        <a></a>
      )
    }
  }

  return (
    <FootWrapper>
      <div className="content w980">
        <FootLeft>
          <p>
            {
              footerlinks.map(item, index => {
                return (
                  showLinks(item,index)
                )
              })
            }
          </p>
        </FootLeft>
        <FootRight>
          FOOTRIGHT
        </FootRight>
      </div>
    </FootWrapper>
  )
})

export default YKAppFooter