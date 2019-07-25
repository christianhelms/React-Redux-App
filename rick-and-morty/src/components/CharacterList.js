import React from 'react'
import {connect} from "react-redux"
import Card from "./Card"

function CharacterList(props) {
    console.log(props.cards)
    return (
        <div>
            {props.cards.map(char => <Card char={char}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    cards: state.cards
})

export default connect(mapStateToProps, {})(CharacterList)
