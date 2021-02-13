import React from 'react'
import PokemonImage from './PokemonImage'
import Button from './Button'
import Input from './Input'

const styles = {
    input: {
        margin: '12px 0'
    },
    button: {
        margin: '12px 0'
    },
    buttonSmall: {
        width: 'auto'
    },
}

class ChairInfoForm extends React.Component {
    render() {
        const {
        } = this.props

        return (
            <form className="charInfo-form">
                <Input
                    style={styles.input}
                    type="text"
                    placeholder="Enter Pokemon name"
                    value={inputValue}
                    onChange={onInputChange}/>

                <Button
                    style={styles.button}
                    onClick={onSubmit}
                </Button>
            </form>
        )
    }
}

export default ChairInfoForm
