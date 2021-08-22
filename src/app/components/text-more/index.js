import React, { useState } from 'react'
import PropTypes from 'prop-types'

//text with more button 
function TextMore({ text, limit }) {
    if (!text) {
        return null
    }
    const [showMore, setShowMore] = useState(text.length > limit ? true : false)
    return (
        <>
            {showMore && <span>{text.substring(0, limit)} <a href="#!" onClick={(e) => { e.preventDefault(); setShowMore(false) }}> see more</a></span>}
            {!showMore && <span>{text}<a href="#!" onClick={(e) => { e.preventDefault(); setShowMore(true) }}> see less</a></span>}
        </>
    )
}

TextMore.prototype = {
    text: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
}
export default TextMore