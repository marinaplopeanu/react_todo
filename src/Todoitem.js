//do rce tab to generate a component

import React, { Component } from 'react'

const TodoItem = props => {

    return (
        <div onClick={() => props.onClick(props.id)}  style={{'textDecoration': props.completed? 'line-through':'none'}}>
            <p>{props.title}</p>
            <p>{props.completed}</p>
        </div>
    )

}

export default TodoItem
