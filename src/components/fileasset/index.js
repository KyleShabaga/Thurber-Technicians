import React from "react"
import { Card } from "react-bootstrap"

const FileAsset = ({ size, title, url }) => {
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
    <Card className="card-border my-4" style={{ width: "12rem" }}>
      <Card.Body>
        <Card.Title className="pb-2">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Size {sizeMBRound}MB
        </Card.Subtitle>
        <Card.Text>
          <a href={url}>Click to View</a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FileAsset
