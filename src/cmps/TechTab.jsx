import React from 'react'

export function TechTab(props) {
  
    function getClassName() {
        if (props.tab === props.openTab) return 'open'
        return 'closed'
    }
    
    return (
        // <div onClick={() => props.setOpen(props.tab)} style={{ backgroundColor: props.data.color, backgroundImage:props.data.backgroundImg }} className={`tab tab-${getClassName()}`}>
        <div onClick={() => props.setOpen(props.tab)} style={{ backgroundColor: props.data.color }} className={`tab tab-${getClassName()}`}>
            <div className="cutoff-placeholder" />
            <div className={`title title-${getClassName()}`}>
                <h2>
                    {props.data.title}
                </h2>
            </div>
            <div className={`content content-${getClassName()}`}>
                <ul>
                    {props.data.content.map((item, idx) => <li 
                    key={idx}>
                        <div className="item-img" style={{backgroundImage:`url(${item.logo})`}} />
                            
                        {/* <img src={item.logo} 
                        alt={item.text}/
                        ></div> */}
                        <div className="item-text">
                            {item.text}
                            </div>
                            </li>)}
                </ul>
            </div>
        </div>
    )
}
