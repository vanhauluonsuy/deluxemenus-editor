import './App.css';

import { Item } from './item';
import React, { Component } from 'react';
import McText from 'mctext-react'
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

export class Slot extends Component {
  slotData = () => <div
    onClick={() => { if (!this.props.isSearch) this.props.selectedSlot(this.props.id) }}
    onContextMenu={(e) => {
      if (!this.props.isSearch) {
        e.preventDefault();
        this.props.openSearch(this.props.id);
      }
    }}
    id={this.props.id}
    className={`slot${this.props.isSelected ? ' selectedSlot' : ''}`}
  >
    <Item
      img={this.props.icon || 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAF0lEQVRIDWMYBaNgFIyCUTAKRsEoQAMACCAAATXQUGAAAAAASUVORK5CYII='}
      count={this.props.amount}
      />
  </div>
  render() {
    const loreText = Array.isArray(this.props.lore)
      ? this.props.lore.join('\n')
      : this.props.lore;
    return(
      loreText ? <Tooltip
        showArrow={false}
        overlay={
          <McText
            style={{
              fontFamily: "Minecraft",
              whiteSpace: "pre-line"
            }}
            prefix='&'
            randomChars='ABCDEFGHJKLMNOPQRSTUVWXYZ'
          >
            { loreText }
          </McText>
        }
      >
        {this.slotData()}
      </Tooltip> : this.slotData()
    )
  }
}
