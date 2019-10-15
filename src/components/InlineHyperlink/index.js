import React from "react"
import { ButtonToolbar, OverlayTrigger, Popover, Button } from "react-bootstrap"

const InlineHyperlink = ({ url, size, title }) => {
  function round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision / 2)
    return y - (y % (precision === undefined ? 1 : +precision))
  }

  const fileSize = { size }
  const fileSizeValue = Object.values(fileSize)
  const fileSizeNum = parseInt(fileSizeValue)
  const sizeMB = fileSizeNum / 1000000
  const sizeMBRound = round_to_precision(sizeMB, 0.01)

  return (
    <ButtonToolbar className="popup__inline">
      {["top"].map(placement => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Title as="h3">
                <a href={url}>{title}</a>
              </Popover.Title>
              <Popover.Content>Size {sizeMBRound}MB</Popover.Content>
            </Popover>
          }
        >
          <Button
            className="py-0 inline-asset-pdf"
            variant="outline-dark"
            size="sm"
          >
            {title}
          </Button>
        </OverlayTrigger>
      ))}
    </ButtonToolbar>
  )
}

export default InlineHyperlink
