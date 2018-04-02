import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NodeList extends Component {
  constructor () {
    super()
    this.state = {
      isActive: false
    }
  }

  componentDidMount () {
    requestAnimationFrame(() => {
      this.setState({
        isActive: true
      })
    })
  }

  render () {
    const {
      children,
      className,
      render,
      sequence,
      stagger,
      ...rest
    } = this.props
    const { isActive } = this.state

    const componentClassName = classNames(
      'ax-NodeList',
      isActive && 'ax-active',
      stagger && 'ax-stagger',
      sequence,
      className
    )

    return render ? render({
      className: componentClassName,
      ...rest
    }) : (
      <div className={componentClassName} {...rest}>
        {children}
      </div>
    )
  }
}

NodeList.propTypes = {
  sequence: PropTypes.string,
  stagger: PropTypes.bool
}

NodeList.defaultProps = {
  sequence: 'ax-fade',
  stagger: true
}

export default NodeList
