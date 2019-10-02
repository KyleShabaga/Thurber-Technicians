import React from "react"
import { ButtonToolbar, OverlayTrigger, Popover, Button } from "react-bootstrap"
import { Link } from "gatsby"

const InlineEmbeddedEntry = ({ title, description, slug, categorySlug }) => {
  return (
      <ButtonToolbar className='popup__inline'>
        {["top"].map(placement => (
          <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
              <Popover id={`popover-positioned-${placement}`}>
                <Popover.Title as="h3">
                  <Link to={`/doc/${categorySlug}/${slug}`}>{title}</Link>
                </Popover.Title>
                <Popover.Content>{description}</Popover.Content>
              </Popover>
            }
          >
            <Button className="py-0" variant="outline-dark" size="sm">
              {title}
            </Button>
          </OverlayTrigger>
        ))}
      </ButtonToolbar>
    
  )
}

export default InlineEmbeddedEntry
